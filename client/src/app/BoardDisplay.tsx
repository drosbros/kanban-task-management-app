'use client'

import useBoardsStore from '@hooks/useBoardsStore'
import React from 'react'

type Props = {
  boards: Board[]
}

const BoardDisplay = ({ boards }: Props) => {
  const { setBoards } = useBoardsStore()
  setBoards(boards)

  return (
    <div>
      {boards.map((board) => (
        <span key={board.name}>{board.name}</span>
      ))}
    </div>
  )
}

export default BoardDisplay
