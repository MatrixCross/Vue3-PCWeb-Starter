import { encrypt, decrypt } from 'crypto-js/aes'
import pkcs7 from 'crypto-js/pad-pkcs7'
import ECB from 'crypto-js/mode-ecb'
import md5 from 'crypto-js/md5'
import UTF8, { parse } from 'crypto-js/enc-utf8'
import Base64 from 'crypto-js/enc-base64'

export interface EncryptionParams {
  key: string
  iv?: string
}

// 提供简单的aes-ECB加密，如有其他需求按需进行改造
export class AesECBEncryption {
  private key
  private options

  constructor(options: EncryptionParams) {
    this.key = parse(options.key)
    this.options = {
      mode: ECB,
      padding: pkcs7,
    }
  }

  encryptByAES(cipherText: string) {
    if (this.key) {
      return encrypt(cipherText, this.key, this.options).toString()
    }
  }

  decryptByAES(cipherText: string) {
    if (this.key) {
      return decrypt(cipherText, this.key, this.options).toString(UTF8)
    }
  }
}

export function encryptByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8)
}

export function decodeByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8)
}

export function encryptByMd5(password: string) {
  return md5(password).toString()
}
