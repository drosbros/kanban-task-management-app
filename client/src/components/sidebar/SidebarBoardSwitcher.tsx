'use client'

import BoardIcon from '@components/icons/BoardIcon'
import { cn } from '@lib/utils'
import { useBoardStore } from '@stores/boardStore'
import SidebarButton from './SidebarBoardSwitcherButton'

function SidebarBoardSwitcher() {
  const { boards, currentBoard } = useBoardStore((state) => ({
    boards: state.boards,
    currentBoard: state.currentBoard,
  }))

  return (
    <div>
      <h3 className='px-8 uppercase text-gray-medium text-sm font-bold tracking-widest'>
        All Boards ({boards.length})
      </h3>
      <div className='grid gap-4 mt-6'>
        {boards.map((board) => (
          <SidebarButton
            key={board.name}
            className='flex items-center gap-4'
            boardName={board.name}
            isActive={board === currentBoard}
          >
            <BoardIcon
              className={cn({
                'fill-white': board === currentBoard,
              })}
            />
            {board.name}
          </SidebarButton>
        ))}
      </div>
    </div>
  )
}

export default SidebarBoardSwitcher
