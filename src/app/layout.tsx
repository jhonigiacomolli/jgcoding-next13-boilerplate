import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { Providers } from '@/providers'
import { serverTheme } from '@/hooks/use-theme/server-theme'

type RootLayoutProps = {
  children: ReactNode
}

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next 13 BoilerPlate',
  description: 'This is a basic boilerplate for NextJs 13',
}

export default function RootLayout({ children }: RootLayoutProps) {
  const theme = serverTheme()

  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta lang='pt-BR' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="shortcut icon" href="/fav-icon.svg" type="image/svg+xml" />
      <meta name="viewport" content='width=device-width, initial-scale=1' />
      <body className={inter.className}>
        <Providers theme={theme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
