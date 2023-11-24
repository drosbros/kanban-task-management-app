import React from 'react'

declare global {
  interface ChildrenProps {
    children: React.ReactNode
  }

  type SubTask = {
    id: string
    title: string
    isCompleted: boolean
  }

  type Task = {
    id: string
    title: string
    description: string
    status: string
  }

  type Column = {
    id: string
    name: string
  }

  type Board = {
    id: string
    name: string
  }
}

export {}
