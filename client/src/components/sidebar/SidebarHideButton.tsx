'use client'

import { useSidebarActions } from '@stores/sidebarStore'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

function SidebarHideButton(props: Props) {
  const { close } = useSidebarActions()

  return (
    <button
      {...props}
      onClick={() => close()}
      className='flex items-center gap-2 text-gray-medium font-bold text-sm'
    >
      <Image
        src='/icon/icon-hide-sidebar.svg'
        alt='hide sidebar'
        width={16}
        height={16}
      />
      Hide Sidebar
    </button>
  )
}

export default SidebarHideButton
