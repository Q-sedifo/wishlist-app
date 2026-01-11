const BASE_URL = 'http://localhost:3001'

export function useApi() {
  async function request<T>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, options)

    if (!res.ok) {
      throw new Error('API error')
    }

    return res.json()
  }

  return { request }
}