'use client'

import React, { ComponentPropsWithoutRef } from 'react'
import Button from '../ui/Button'
import { cn } from '@lib/utils'
import Image from 'next/image'

type Props = ComponentPropsWithoutRef<typeof Button>

function SidebarShowButton({ className, ...rest }: Props) {
  return (
    <Button {...rest} size={'large'} className={cn('grid place-items-center px-5 py-4 rounded-l-none', className)}>
      <Image src='/icon/icon-show-sidebar.svg' alt='show sidebar' width={16} height={16} />
    </Button>
  )
}

export default SidebarShowButton
