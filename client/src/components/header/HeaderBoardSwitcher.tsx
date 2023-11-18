'use client'

import BoardIcon from '@components/icons/BoardIcon'
import CustomThemeSwitcher from '@components/sidebar/CustomThemeSwitcher'
import Button from '@components/ui/Button'
import CustomButton from '@components/ui/CustomButton'
import Dialog from '@components/ui/Dialog'
import { cn } from '@lib/utils'
import { useBoardActions, useBoardStore } from '@stores/boardStore'
import Image from 'next/image'
import { useState } from 'react'

type Props = {}

function HeaderBoardSwitcher({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { boards, currentBoard } = useBoardStore((state) => ({
    boards: state.boards,
    currentBoard: state.currentBoard,
  }))

  const { setSelectedBoard } = useBoardActions()

  const handleClick = (board: Board) => setSelectedBoard(board)

  return (
    <>
      <Button
        variant={'unstyled'}
        className='p-0 flex gap-2 items-center text-lg font-bold'
        onClick={() => setIsOpen(true)}
      >
        {currentBoard?.name}
        <Image src={`icon/icon-chevron-${isOpen ? 'up' : 'down'}.svg`} alt='' width={10} height={10} />
      </Button>
      <Dialog onClose={setIsOpen} open={isOpen}>
        <Dialog.Title>All Boards ({boards.length})</Dialog.Title>
        {boards.map((board, index) => (
          <CustomButton
            key={index}
            className='flex items-center gap-2 group'
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
          </CustomButton>
        ))}
        <div className='p-4'>
          <CustomThemeSwitcher />
        </div>
      </Dialog>
    </>
  )
}

export default HeaderBoardSwitcher
