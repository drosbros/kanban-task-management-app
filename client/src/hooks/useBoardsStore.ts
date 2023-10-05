import { create } from 'zustand'

type BoardState = {
  currentBoard: Board | null
  boards: Board[]
  setBoards: (boards: Board[]) => void
}

const useBoardsStore = create<BoardState>()((set) => ({
  currentBoard: null,
  boards: [],
  setBoards: (boards: Board[]) => set({ boards }),
}))

export default useBoardsStore
