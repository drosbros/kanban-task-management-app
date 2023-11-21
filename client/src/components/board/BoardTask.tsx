import React from 'react'

type Props = {
  task: Task
}

function BoardTask({ task }: Props) {
  const subtasksCompleted = task.subtasks.filter((subtask) => subtask.isCompleted).length
  const subtasksTotal = task.subtasks.length

  return (
    <div className='bg-white dark:bg-gray-dark rounded-lg py-5 px-4 prevent-drag-scroll cursor-default min-w-[280px]'>
      <h3 className={'font-bold mb-2'}>{task.title}</h3>
      <p className={'text-sm text-gray-medium font-bold'}>
        {subtasksCompleted} of {subtasksTotal} subtasks
      </p>
    </div>
  )
}

export default BoardTask
