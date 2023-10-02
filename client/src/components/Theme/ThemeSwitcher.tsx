'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Button from '@components/ui/Button'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
