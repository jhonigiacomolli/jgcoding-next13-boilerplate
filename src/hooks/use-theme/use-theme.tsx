import { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { useCookies } from '@/hooks/use-cookies/use-cookies'
import { dark } from '@/ui/theme/_dark'
import { light } from '@/ui/theme/_light'

export const useTheme = (activeTheme: DefaultTheme) => {
  const [appTheme, setAppTheme] = useState(activeTheme)
  const { setCookie } = useCookies()

  const toggleTheme = () => {
    setAppTheme(old => {
      const active = old.name === 'light' ? dark : light

      setCookie({
        cookie: 'r2j_theme',
        value: active.name,
        path: '/',
      })

      return active
    })
  }

  appTheme.toggle = toggleTheme

  return {
    appTheme,
    toggleTheme,
  }
}
