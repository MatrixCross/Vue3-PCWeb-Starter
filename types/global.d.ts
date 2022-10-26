declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void]

  interface Recordable {
    [k: string | number]: unknown
  }

  interface KeyLabel {
    key: string | number
    label: string | number
  }
}
