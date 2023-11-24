'use client'

import CustomButton from '@components/CustomButton'
import CustomThemeSwitcher from '@components/CustomThemeSwitcher'
import Button from '@components/ui/Button'
import Dialog from '@components/ui/Dialog'
import { cn } from '@lib/utils'
import { boardState, setCurrentBoard } from '@states/boardState'
import Image from 'next/image'
import { useState } from 'react'
import Icons from '@components/Icons'
import { useSnapshot } from 'valtio'

function HeaderBoardSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { boards, currentBoard } = useSnapshot(boardState) as typeof boardState

  const handleClick = (board: Board) => setCurrentBoard(board)

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
        <Dialog.Title className={'uppercase text-gray-medium tracking-widest px-8 py-4'}>
          All Boards ({boards.length})
        </Dialog.Title>
        {boards.map((board) => (
          <CustomButton
            key={board.id}
            className='flex items-center gap-2 group'
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
        <div className='p-4'>
          <CustomThemeSwitcher />
        </div>
      </Dialog>
    </>
  )
}

export default HeaderBoardSwitcher
