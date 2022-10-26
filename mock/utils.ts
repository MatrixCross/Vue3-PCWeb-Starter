export interface requestParams {
  method: string
  body: any
  headers?: { Authorization?: string }
  query: any
}

export function getRequestToken({
  headers,
}: requestParams): string | undefined {
  return headers?.Authorization
}

export function successMessage({ message = 'ok' } = {}) {
  return {
    code: 0,
    data: null,
    message,
    success: true,
  }
}

export function successData<T = Record<string, any>>(
  data: T,
  { message = 'ok' } = {}
) {
  return {
    code: 0,
    data,
    message,
    type: 'success',
  }
}

export function resultError(
  message = 'Request failed',
  { code = -1, data = null } = {}
) {
  return {
    code,
    data,
    message,
    type: 'error',
  }
}

export function pagination<T = any>(
  pageNo: number,
  pageSize: number,
  list: T[]
): T[] {
  const offset = (pageNo - 1) * Number(pageSize)
  const ret =
    offset + Number(pageSize) >= list.length
      ? list.slice(offset, list.length)
      : list.slice(offset, offset + Number(pageSize))
  return ret
}

export function successPage<T = any>(
  pageNo: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(pageNo, pageSize, list)

  return {
    ...successData({
      rows: pageData,
      total: list.length,
    }),
    message,
  }
}
