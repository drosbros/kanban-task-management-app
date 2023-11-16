'use client'

import BoardIcon from '@components/icons/BoardIcon'
import CustomThemeSwitcher from '@components/sidebar/CustomThemeSwitcher'
import Button from '@components/ui/Button'
import CustomButton from '@components/ui/CustomButton'
import { Dialog, Transition } from '@headlessui/react'
import { cn } from '@lib/utils'
import { useBoardActions, useBoardStore } from '@stores/boardStore'
import Image from 'next/image'
import { Fragment, useState } from 'react'

type Props = {}

function HeaderBoardSwitcher({}: Props) {
  const [open, setOpen] = useState(true)
  const { boards, currentBoard } = useBoardStore((state) => ({
    boards: state.boards,
    currentBoard: state.currentBoard,
  }))

  const { setSelectedBoard } = useBoardActions()

  const handleClick = (board: Board) => setSelectedBoard(board)

  return (
    <>
      <Button variant={'unstyled'} className='p-0 flex gap-2 items-center' onClick={() => setOpen(true)}>
        {currentBoard?.name}
        <Image src={`icon/icon-chevron-${open ? 'up' : 'down'}.svg`} alt='' width={10} height={10} />
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 z-30 bg-black/40 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 w-screen overflow-y-auto z-40'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='bg-white dark:bg-gray-dark relative transform overflow-hidden rounded-lg shadow-xl transition-all min-w-[180px] max-w-[450px] w-[75vw]'>
                  <Dialog.Title
                    as='h3'
                    className='text-left uppercase text-gray-medium py-4 px-8 text-sm font-bold tracking-widest'
                  >
                    All Boards ({boards.length})
                  </Dialog.Title>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default HeaderBoardSwitcher
