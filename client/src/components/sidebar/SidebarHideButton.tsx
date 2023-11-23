'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import CustomButton from '../CustomButton'
import { closeSidebar } from '@states/sidebarState'

type Props = ComponentPropsWithoutRef<'button'>

function SidebarHideButton(props: Props) {
  return (
    <CustomButton
      {...props}
      onClick={() => closeSidebar()}
      isActive={false}
      className='flex items-center gap-2 text-gray-medium font-bold text-sm'
    >
      <Image src='/icon/icon-hide-sidebar.svg' alt='hide sidebar' width={16} height={16} />
      Hide Sidebar
    </CustomButton>
  )
}

export default SidebarHideButton
