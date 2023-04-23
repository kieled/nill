import { useCallback, useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

function getInitialMode(): ThemeMode {
  const storageMode = localStorage.getItem('theme') as ThemeMode | undefined
  if (storageMode)
    return storageMode

  localStorage.setItem('theme', 'light')
  return 'light'
}

type ReturnType = [mode: ThemeMode, onSwitch: () => void]
function useTheme(): ReturnType {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode())

  useEffect(() => {
    localStorage.setItem('theme', mode)
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
