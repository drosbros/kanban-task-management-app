'use client'

import Board from '@components/board/Board'
import { useBoardActions, useBoardStore } from '@stores/boardStore'
import React, { memo, useEffect } from 'react'

type Props = {
  boards: Board[]
}

function BoardView({ boards }: Props) {
  const currentBoard = useBoardStore((state) => state.currentBoard)
  const { setSelectedBoard, setBoards } = useBoardActions()

  useEffect(() => {
    setBoards(boards)
    if (boards.length === 0) return
    if (!currentBoard || !boards.includes(currentBoard)) {
      setSelectedBoard(boards[0])
    }
  }, [boards, currentBoard, setSelectedBoard, setBoards])

  return <div>{currentBoard && <Board board={currentBoard} />}</div>
}

export default memo(BoardView)
