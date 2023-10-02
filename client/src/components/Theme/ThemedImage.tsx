'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

type Props = {
  darkSrc: string
  lightSrc: string
} & Omit<ComponentPropsWithoutRef<typeof Image>, 'src'>

export function ThemedImage({ darkSrc, lightSrc, ...rest }: Props) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return resolvedTheme === 'dark' ? <Image src={darkSrc} {...rest} /> : <Image src={lightSrc} {...rest} />
}
