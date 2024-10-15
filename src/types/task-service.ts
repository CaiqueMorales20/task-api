import type { Task } from '@prisma/client'

interface ITaskService {
  createTask({ name }: Pick<Task, 'name'>): Promise<Task | null>
  updateTask({ name }: Pick<Task, 'name'>): Promise<Task | null>
  deleteTask({ id }: Pick<Task, 'id'>): Promise<Task | null>
  getAllTasks(): Promise<Task[] | null>
  markAsCompleted({ id }: Pick<Task, 'id'>): Promise<Task | null>
}

export { type ITaskService }
