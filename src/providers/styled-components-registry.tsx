'use client'

import { ReactNode, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

type RootLayoutProps = {
  children: ReactNode
}

export const StyledComponentRegistry = ({ children }: RootLayoutProps) => {
  const [styleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement()
    styleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined')
    return (
      <>
        {children}
      </>
    )

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
