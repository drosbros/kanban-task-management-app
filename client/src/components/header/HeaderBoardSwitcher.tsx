import { useBoardActions, useBoardStore } from '@stores/boardStore'

type Props = {}

function HeaderBoardSwitcher({}: Props) {
  const { boards, currentBoard } = useBoardStore((state) => ({
    boards: state.boards,
    currentBoard: state.currentBoard,
  }))

  const { setSelectedBoard } = useBoardActions()

  const handleClick = (board: Board) => setSelectedBoard(board)

  return <div>HeaderBoardSwitcher</div>
}

export default HeaderBoardSwitcher
