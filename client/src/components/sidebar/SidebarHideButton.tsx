'use client'

import { useSidebarActions } from '@stores/sidebarStore'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import SidebarButton from './SidebarButton'

type Props = ComponentPropsWithoutRef<'button'>

function SidebarHideButton(props: Props) {
  const { close } = useSidebarActions()

  return (
    <SidebarButton
      {...props}
      onClick={() => close()}
      isActive={false}
      className='flex items-center gap-2 text-gray-medium font-bold text-sm'
    >
      <Image src='/icon/icon-hide-sidebar.svg' alt='hide sidebar' width={16} height={16} />
      Hide Sidebar
    </SidebarButton>
  )
}

export default SidebarHideButton
