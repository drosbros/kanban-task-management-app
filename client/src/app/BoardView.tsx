'use client'

import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

type Props = {
  boards: Board[]
}

function BoardView({ boards }: Props) {
  return (
    <div className='flex gap-20 absolute left-72'>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className='w-[200px] aspect-square bg-red-default'>
          {i}
        </div>
      ))}
    </div>
  )
}

export default BoardView
