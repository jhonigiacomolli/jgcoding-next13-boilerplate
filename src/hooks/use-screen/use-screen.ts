import { useEffect, useState } from 'react'

type Device = 'mobile' | 'desktop'

type Screen = {
  width: number
  height: number
  availableWidth: number
  innerWidth: number
  innerHeight: number
  device: Device
}

const initialScreen = {
  width: 0,
  height: 0,
  innerWidth: 0,
  innerHeight: 0,
  availableWidth: 0,
  device: 'desktop' as Device,
}

export const useScreen = () => {
  const [screen, setScreen] = useState<Screen>(initialScreen)

  const updateScreen = () => {
    setScreen({
      width: window.screen.width,
      height: window.screen.height,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      availableWidth: window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth,
      device: window.innerWidth > 991 ? 'desktop' : 'mobile',
    })
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreen)
    updateScreen()
  }, [])

  return screen
}
