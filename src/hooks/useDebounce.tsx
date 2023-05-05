import { useState, useEffect } from 'react'

export const useDobounce = (search: string, timeout: number = 300) => {
  const [debounce, setDebounce] = useState<string>('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounce(search)
    }, timeout)

    return () => clearTimeout(timeoutId)

  }, [search])

  return {
    debounce
  }
}