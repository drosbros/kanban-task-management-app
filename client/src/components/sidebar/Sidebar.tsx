'use client'

import { ComponentPropsWithRef, forwardRef } from 'react'
import SidebarHideButton from './SidebarHideButton'
import SidebarThemeSwitcher from './SidebarThemeSwitcher'
import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import SidebarShowButton from './SidebarShowButton'

type Props = ComponentPropsWithRef<'div'>

const Sidebar = forwardRef<HTMLDivElement, Props>(function Sidebar({ className, ...rest }, ref) {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <>
      <div
        ref={ref}
        className={cn(
          'h-full border-r-2 border-lines-light dark:border-lines-dark bg-white dark:bg-gray-dark cursor-default',
          {
            '-translate-x-full': !isOpen,
            'translate-x-0': isOpen,
          },
          className
        )}
        {...rest}
      >
        <div></div>
        <div className='p-6 flex flex-col gap-4'>
          <SidebarThemeSwitcher />
          <SidebarHideButton />
        </div>
      </div>
      {!isOpen && <SidebarShowButton className='z-30 absolute bottom-6 left-0' />}
    </>
  )
})
export default Sidebar
