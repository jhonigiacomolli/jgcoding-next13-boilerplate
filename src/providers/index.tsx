'use client'

import { PropsWithChildren } from 'react'
import { useTheme } from '@/hooks/use-theme/use-theme'
import { GlobalStyle } from '@/ui/theme/global-styles'
import { StyledComponentRegistry } from '@/ui/theme/registry'
import { DefaultTheme, ThemeProvider } from 'styled-components'

type ProvidersProps = PropsWithChildren & {
  theme: DefaultTheme
}
export function Providers({ children, theme }: ProvidersProps) {
  const { appTheme } = useTheme(theme)

  return (
    <StyledComponentRegistry>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider >
    </StyledComponentRegistry>
  )
}
