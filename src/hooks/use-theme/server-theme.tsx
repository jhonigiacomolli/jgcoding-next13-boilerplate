import { dark } from '../../ui/theme/_dark'
import { light } from '../../ui/theme/_light'
import { Theme } from '@/@types/theme'
import { cookies } from 'next/headers'

export const serverTheme = () => {
  const getTheme = (): Theme => {
    const theme = cookies().get('r2j_theme')?.value

    if (theme !== 'dark' && theme !== 'light') {
      return 'light'
    }
    return theme
  }

  const themes = {
    dark: dark,
    light: light,
  }

  return themes[getTheme()]
}
