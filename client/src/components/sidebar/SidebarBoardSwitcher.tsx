'use client'

import BoardIcon from '@components/icons/BoardIcon'
import { cn } from '@lib/utils'
import { useBoardActions, useBoardStore } from '@stores/boardStore'
import SidebarButton from './SidebarButton'

function SidebarBoardSwitcher() {
  const { boards, currentBoard } = useBoardStore((state) => ({
    boards: state.boards,
    currentBoard: state.currentBoard,
  }))

  const { setSelectedBoard } = useBoardActions()

  const handleClick = (board: Board) => setSelectedBoard(board)

  return (
    <div>
      <h3 className='px-8 uppercase text-gray-medium text-sm font-bold tracking-widest'>
        All Boards ({boards.length})
      </h3>
      <div className='grid gap-4 mt-6'>
        {boards.map((board, index) => (
          <SidebarButton
            key={index}
            className='flex items-center gap-4 group'
            isActive={board === currentBoard}
            onClick={() => handleClick(board)}
          >
            <BoardIcon
              className={cn({
                'fill-white': board === currentBoard,
                'group-hover:fill-purple-default': board !== currentBoard,
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
