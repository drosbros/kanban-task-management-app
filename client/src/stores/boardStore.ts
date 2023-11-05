import { create } from 'zustand'

interface BoardState {
  boards: Board[]
  currentBoard: Board | null
}

interface BoardActions {
  actions: {
    setBoards: (boards: BoardState['boards']) => void
    setSelectedBoard: (board: BoardState['currentBoard']) => void
  }
}

export const useBoardStore = create<BoardState & BoardActions>()((set) => ({
  boards: [],
  currentBoard: null,
  actions: {
    setBoards: (boards) => set(() => ({ boards })),
    setSelectedBoard: (currentBoard) => set(() => ({ currentBoard })),
  },
}))

export const useBoardActions = () => useBoardStore((state) => state.actions)
