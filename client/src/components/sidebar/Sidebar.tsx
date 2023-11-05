'use client'

import { motion } from 'framer-motion'
import { useSidebarStore } from '@stores/sidebarStore'
import { AnimatePresence } from 'framer-motion'
import SidebarHideButton from './SidebarHideButton'
import SidebarShowButton from './SidebarShowButton'
import SidebarThemeSwitcher from './SidebarThemeSwitcher'

function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          key={'sidebar'}
          initial={{ translateX: '-100%' }}
          animate={{ translateX: '0%' }}
          exit={{ translateX: '-100%' }}
          transition={{ duration: 0.8 }}
          className='min-w-[18rem] z-20 translate-x-0 hidden md:flex flex-col justify-between bg-white dark:bg-gray-dark border-r-2 border-lines-light dark:border-lines-dark'
        >
          <div></div>
          <div className='p-6 flex flex-col gap-4'>
            <SidebarThemeSwitcher />
            <SidebarHideButton />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={'button'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.2 }}
        >
          <SidebarShowButton className='absolute bottom-10 left-0 z-40' />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
