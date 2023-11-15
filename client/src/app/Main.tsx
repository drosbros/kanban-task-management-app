'use client'

import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import View from './View'

type Props = {
  boards: Board[]
}

function Main({ boards }: Props) {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <ScrollContainer
      className='isolate flex h-full'
      mouseScroll={{ rubberBand: true, ignoreElements: '.prevent-drag-scroll' }}
    >
      <div
        className={cn('p-6 z-10 relative h-full transition-[left]', {
          'lg:left-[18rem]': isOpen,
          'lg:left-0': !isOpen,
        })}
      >
        <View boards={boards} />
      </div>
    </ScrollContainer>
  )
}

export default Main
