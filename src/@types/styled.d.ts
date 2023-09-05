declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'dark' | 'light',
    toggle?: () => void,
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      black: string
      gray100: string
      gray100Alpha70: string
      gray95: string
      gray90: string
      gray90Alpha70: string
      gray80: string
      gray70: string
      gray60: string
      gray50: string
      gray40: string
      gray30: string
      gray20: string
      gray10: string
      gray5: string
      gray0: string
      white: string
      whiteAlpha70: string
    }
    sizes: {
      boxed: string
    }
  }
}
export { }
