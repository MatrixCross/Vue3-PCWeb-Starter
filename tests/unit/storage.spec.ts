import { storage } from '@/utils/storage/index'
import {beforeEach, afterEach, describe, it, expect} from 'vitest'

beforeEach(() => {
  localStorage.clear()
})

afterEach(() => {
  localStorage.clear()
})

describe('测试storage', () => {
  it('默认过期时间', () => {
    const key = 'test'
    const val = 'hello world'
    storage.set(key, val)
    expect(storage.get(key)).toEqual(val)
  })
  it('测试过期', async () => {
    const key = 'test'
    const val = 'hello world'
    const timeout = 0.1
    storage.set(key, val, timeout)
    const getVal = await after1second(key)
    expect(getVal).toEqual(null)
  })
})

function after1second(key: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(storage.get(key))
    }, 200)
  })
}
