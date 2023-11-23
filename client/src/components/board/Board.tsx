'use client'

import 'react-indiana-drag-scroll/dist/style.css'
import BoardColumn from './BoardColumn'

type Props = {
  board: Board
}

function Board({ board }: Props) {
  return (
    <div className='flex gap-6'>
      {board.columns.map((column) => (
        <BoardColumn key={column.id} column={column} />
      ))}
    </div>
  )
}

export default Board
