import { proxy } from 'valtio'

interface BoardState {
  boards: Board[]
  currentBoard: Board | null
}

export const boardState = proxy<BoardState>({
  boards: [],
  currentBoard: null,
})

export const setBoards = (boards: BoardState['boards']) => {
  boardState.boards = boards
}
export const setCurrentBoard = (currentBoard: BoardState['currentBoard']) => {
  boardState.currentBoard = currentBoard
}
