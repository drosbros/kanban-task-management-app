'use client'

import React, { useState } from 'react'
import Dialog from '@ui/Dialog'
import Checkbox from '@ui/Checkbox'

type Props = {
  task: Task
}

function BoardTask({ task }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const subtasksCompleted = task.subtasks.filter((subtask) => subtask.isCompleted).length
  const subtasksTotal = task.subtasks.length

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className='bg-white dark:bg-gray-dark rounded-lg py-5 px-4 prevent-drag-scroll min-w-[280px] cursor-pointer'
      >
        <h3 className={'font-bold mb-2'}>{task.title}</h3>
        <p className={'text-sm text-gray-medium font-bold'}>
          {subtasksCompleted} of {subtasksTotal} subtasks
        </p>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={'px-8 py-4'}>
        <Dialog.Title className={'text-lg mb-4'}>{task.title}</Dialog.Title>
        <p className={'font-medium text-gray-medium text-sm mb-4 leading-6'}>{task.description}</p>
        <h4 className={'font-bold text-sm mb-4 text-gray-medium dark:text-white'}>
          Subtasks ({subtasksCompleted} of {subtasksTotal})
        </h4>
        <div className={'flex flex-col gap-4'}>
          {task.subtasks.map((subtask) => (
            <Checkbox
              key={subtask.id}
              checked={subtask.isCompleted}
              label={subtask.title}
              onChange={(e) => console.log(e.target.checked)}
            />
          ))}
        </div>
      </Dialog>
    </>
  )
}

export default BoardTask
