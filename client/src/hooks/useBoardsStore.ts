import { create } from 'zustand'

type SubTask = {
  title: string
  isCompleted: boolean
}

type Task = {
  title: string
  description: string
  status: string
  subTasks: SubTask[]
}

type Column = {
  name: string
  tasks: Task[]
}

type Board = {
  name: string
  columns: Column[]
}

type BoardState = {
  currentBoard: Board | null
  boards: Board[]
}

const useBoardsStore = create<BoardState>()((set) => ({
  currentBoard: null,
  boards: [],
}))

export default useBoardsStore
