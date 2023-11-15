import React from 'react'

type Props = {
  task: Task
}

function BoardTask({ task }: Props) {
  return (
    <div
      prevent-drag-scroll
      className='bg-white dark:bg-gray-dark rounded-lg py-4 px-2 prevent-drag-scroll cursor-default min-w-[280px]'
    >
      <h3>{task.title}</h3>
    </div>
  )
}

export default BoardTask
