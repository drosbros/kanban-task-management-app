'use client'

import Board from '@components/board/Board'
import { boardState, setBoards, setCurrentBoard } from '@states/boardState'
import React, { memo, useEffect } from 'react'
import { useSnapshot } from 'valtio'

type Props = {
  boards: Board[]
}

function BoardView({ boards }: Props) {
  const { currentBoard } = useSnapshot(boardState) as typeof boardState

  useEffect(() => {
    setBoards(boards)
    if (boards.length === 0) return
  }, [boards, currentBoard, setCurrentBoard, setBoards])

  return <div>{currentBoard && <Board board={currentBoard} />}</div>
}

export default memo(BoardView)
