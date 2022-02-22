function addThemeColorCssVars() {
  const key = '__THEME_COLOR__'
  const themeColor = window.localStorage.getItem(key) || '#1890ff'
  const cssVars = `--primary-color: ${themeColor}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()
