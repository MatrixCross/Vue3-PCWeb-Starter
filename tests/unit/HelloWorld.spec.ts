import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldTsx from '@/components/HelloWorld'

describe('HelloWorld', () => {
  it('renders sfc properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
    })
    expect(wrapper.text()).toMatch('Hello Vitest')
  })
  it('renders tsx properly', () => {
    const wrapper = mount(HelloWorldTsx, {
      props: { msg: 'Hello Vitest' },
    })
    expect(wrapper.text()).toMatch('Hello Vitest')
  })
})
