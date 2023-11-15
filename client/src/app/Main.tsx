'use client'

import { cn } from '@lib/utils'
import { useSidebarStore } from '@stores/sidebarStore'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import BoardView from './BoardView'

type Props = {
  boards: Board[]
}

function Main({ boards }: Props) {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <ScrollContainer className='isolate flex h-full' mouseScroll={{ rubberBand: true }}>
      <div
        className={cn('p-6 z-10 relative h-full transition-[left]', {
          'left-[18rem]': isOpen,
          'left-0': !isOpen,
        })}
      >
        <BoardView boards={boards} />
      </div>
    </ScrollContainer>
  )
}

export default Main
