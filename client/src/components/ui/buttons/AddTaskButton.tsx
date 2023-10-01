'use client'

import { ComponentPropsWithoutRef, Fragment, ReactNode, useState } from 'react'
import Button from '@ui/Button'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
  children: ReactNode
}

const AddTaskButton = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <>
      <Button variant={'primary'} onClick={openModal}>
        {children}
      </Button>
      <Dialog open={isOpen} onClose={closeModal}>
        <Dialog.Title>Add New Task</Dialog.Title>
      </Dialog>
    </>
  )
}

export default AddTaskButton
