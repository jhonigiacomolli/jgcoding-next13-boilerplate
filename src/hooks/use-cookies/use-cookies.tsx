import { useCallback } from 'react'

type CookieList = {
  [key: string]: string
}

type CookieParams = {
  cookie: string,
  value?: string,
  expire?: Date
  secure?: boolean
}

type SetParams = CookieParams & {
  path?: string
}

type DeleteCookieParms = CookieParams & {
  paths?: string[]
}

type UseCookiesReturn = {
  getCookies: () => CookieList
  setCookie: (props: SetParams) => void
  deleteCookie: (props: DeleteCookieParms) => void
}

export const useCookies = (): UseCookiesReturn => {
  const getCookies = useCallback((): CookieList => {
    const cookiesList = document.cookie
      .split(';')
      .map(item => {
        const [key, value] = item.split('=')
        return {
          key: key.trim(),
          value: value,
        }
      })
      .reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {})

    return cookiesList
  }, [])

  const setCookie = ({ cookie, expire, path, secure, value }: SetParams) => {
    const today = new Date().getTime()
    const oneday = 60 * 60 * 24
    const expireinInMiliseconds = expire?.getTime() || oneday
    const expireParam = expire ? `;max-age=${Math.floor((expireinInMiliseconds - today) / 1000)}` : ''
    const pathParam = path ? `;path=${path}` : ''
    const secureParam = secure ? ';Secure' : ''

    document.cookie = `${cookie}=${value}${expireParam}${pathParam}${secureParam}`
  }

  const deleteCookie = ({ cookie, paths }: DeleteCookieParms) => {
    if (paths && paths?.length > 0) {
      paths?.map(path => {
        document.cookie = `${cookie}=;max-age=-9999;path=${path}`
      })
    } else {
      document.cookie = `${cookie}=;max-age=-9999;path=/`
    }

  }

  return {
    getCookies,
    setCookie,
    deleteCookie,
  }
}
