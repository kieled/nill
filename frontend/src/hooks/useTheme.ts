'use client'

import { useCallback, useEffect, useState } from 'react'
import Cookie from 'js-cookie';

type ThemeMode = 'light' | 'dark'
type ReturnType = [mode: ThemeMode, onSwitch: () => void]

const getInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light'
  }
  if ('dark' in document.documentElement.classList) {
    return 'dark'
  }
  const darkPrefer = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches

  if (localStorage.theme === 'dark' || darkPrefer) {
    document.documentElement.classList.add('dark')
    Cookie.set('theme', 'dark')
    return 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    Cookie.set('theme', 'light')
    return 'light'
  }
}

const useTheme = (): ReturnType => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode())

  useEffect(() => {
    Cookie.set('theme', mode)
    const htmlElement = document.getElementsByTagName('html')[0]
    if (mode === 'dark')
      htmlElement.classList.add('dark')
    else
      htmlElement.classList.remove('dark')
  }, [mode])

  const onSwitch = useCallback(() => {
    const current = getInitialMode()
    if (current === 'dark')
      return setMode('light')

    setMode('dark')
  }, [])

  return [mode, onSwitch]
}

export default useTheme
