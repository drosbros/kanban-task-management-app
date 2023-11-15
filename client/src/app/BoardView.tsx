import React, { memo } from 'react'

type Props = {
  boards: Board[]
}

function BoardView({ boards }: Props) {
  return <div>BoardView</div>
}

export default memo(BoardView)
