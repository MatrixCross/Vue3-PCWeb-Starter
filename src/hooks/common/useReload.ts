import { nextTick } from 'vue'
import { useBoolean } from './useBoolean'

/** 重载 */
export function useReload() {
  // 重载的标志
  const { bool: reloadFlag, setTrue, setFalse } = useBoolean(true)

  /**
   * 触发重载
   * @param duration - 延迟时间(ms)
   */
  async function handleReload(duration = 0) {
    setFalse()
    await nextTick()
    if (duration) {
      setTimeout(() => {
        setTrue()
      }, duration)
    } else {
      setTrue()
    }
  }

  return {
    reloadFlag,
    handleReload,
  }
}
