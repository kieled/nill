import {useCallback, useState} from 'react'

interface OpenItem {
  id: number
  close: () => void
}

const useAutoCloseDisclosure = () => {
  const [, setOpen] = useState<OpenItem>()

  const onChange = useCallback((id: number, close: () => void) => {
    setOpen((prev) => {
      if (prev?.id === id) {
        return undefined
      }
      prev?.close()
      return {id, close}
    })
  }, [])

  return [onChange]
}

export default useAutoCloseDisclosure