'use client'

import { cn } from '@lib/utils'
import CustomButton from '../CustomButton'
import Icons from '@components/Icons'
import { useSnapshot } from 'valtio'
import { boardState, setCurrentBoard } from '@states/boardState'

function SidebarBoardSwitcher() {
  const { boards, currentBoard } = useSnapshot(boardState) as typeof boardState

  console.log(currentBoard)

  const handleClick = (board: Board) => setCurrentBoard(board)

  return (
    <div>
      <h3 className='px-8 uppercase text-gray-medium text-sm font-bold tracking-widest'>
        All Boards ({boards.length})
      </h3>
      <div className='grid gap-4 mt-6'>
        {boards.map((board, index) => (
          <CustomButton
            key={index}
            className='flex items-center gap-4 group'
            isActive={board === currentBoard}
            onClick={() => handleClick(board)}
          >
            <Icons.board
              className={cn({
                'fill-white': board === currentBoard,
                'group-hover:fill-purple-default': board !== currentBoard,
              })}
            />
            {board.name}
          </CustomButton>
        ))}
      </div>
    </div>
  )
}

export default SidebarBoardSwitcher
