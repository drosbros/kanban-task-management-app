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
          left: '18rem',
        },
        sidebarClosed: {
          left: '0',
        },
      }}
      animate={isOpen ? 'sidebarOpen' : 'sidebarClosed'}
      className={cn(className, 'absolute')}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
