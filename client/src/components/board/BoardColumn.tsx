import React from 'react'
import BoardTask from './BoardTask'

type Props = {
  column: Column
}

function BoardColumn({ column }: Props) {
  return (
    <div>
      <h2>{column.name}</h2>
      <div className='grid gap-5 overflow-y-auto'>
        {column.tasks.map((task) => (
          <BoardTask key={task.title} task={task} />
        ))}
      </div>
    </div>
  )
}

export default BoardColumn
