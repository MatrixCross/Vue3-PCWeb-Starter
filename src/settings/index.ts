// 默认缓存期限为7天
export const defaultCacheTime = 60 * 60 * 24 * 7

// storage是否加密，默认使用AES-ECB
export const storageEncrypt = true

// aes-ecb加密密钥
export const encryptoKey = 'KgAh3Tc7PCL1j794'

// api接口url
export const apiBaseUrl = import.meta.env.VITE_API_URL

// 请求超时时长
export const requestTimeout = 5000
