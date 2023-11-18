'use client'

import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import { ComponentPropsWithRef, forwardRef } from 'react'
import CustomThemeSwitcher from './CustomThemeSwitcher'
import SidebarBoardSwitcher from './SidebarBoardSwitcher'
import SidebarHideButton from './SidebarHideButton'
import SidebarShowButton from './SidebarShowButton'

type Props = ComponentPropsWithRef<'div'>

function Sidebar({ className, ...rest }: Props) {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <>
      <div
        className={cn(
          'left-0 min-w-[18rem] h-full py-8 pb-24 z-20 transition-transform hidden fixed lg:flex flex-col justify-between border-r-2 border-lines-light dark:border-lines-dark bg-white dark:bg-gray-dark cursor-default',
          {
            '-translate-x-full': !isOpen,
            'translate-x-0': isOpen,
          },
          className
        )}
        {...rest}
      >
        <SidebarBoardSwitcher />
        <div className='flex flex-col gap-4'>
          <div className='px-8'>
            <CustomThemeSwitcher />
          </div>
          <SidebarHideButton />
        </div>
      </div>
      {!isOpen && <SidebarShowButton className='z-30 absolute bottom-6 left-0' />}
    </>
  )
}
export default Sidebar
