'use client'

import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import { ComponentPropsWithoutRef } from 'react'
import { motion } from 'framer-motion'

type Props = ComponentPropsWithoutRef<'div'>

function PageTransition({ className, children, ...rest }: Props) {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <motion.div
      transition={{ duration: 0.8 }}
      variants={{
        sidebarOpen: {
          x: '200px',
        },
        sidebarClosed: {
          x: '-200px',
        },
      }}
      animate={isOpen ? 'sidebarOpen' : 'sidebarClosed'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
