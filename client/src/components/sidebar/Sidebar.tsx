'use client'

import useDisclosure from '@hooks/useDisclosure'
import Image from 'next/image'
import { ThemeSwitcher } from '../theme'
import { Transition } from '@headlessui/react'
import SidebarHideButton from './SidebarHideButton'
import SidebarShowButton from './SidebarShowButton'

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure(true)

  return (
    <>
      <Transition
        show={isOpen}
        enter='transition-all duration-500 ease-in-out origin-left'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition-all duration-500 ease-in-out origin-left'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'>
        <div className='h-full hidden md:flex w-auto overflow-hidden flex-col justify-between bg-white dark:bg-gray-dark border-r-2 border-lines-light dark:border-lines-dark'>
          <div></div>
          <div className='p-6 flex flex-col gap-4'>
            <ThemeSwitcher />
            <SidebarHideButton onClick={() => onClose()} />
          </div>
        </div>
      </Transition>
      <Transition
        show={!isOpen}
        enter='transition-opacity duration-150 delay-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'>
        <SidebarShowButton onClick={() => onOpen()} className='absolute bottom-10 left-0' />
      </Transition>
    </>
  )
}

export default Sidebar
