declare global {
  interface ChildrenProps {
    children: React.ReactNode
  }

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
    id: string
    name: string
    tasks: Task[]
  }

  type Board = {
    name: string
    columns: Column[]
  }
}

export {}
