import type { Task } from '@prisma/client'

import prisma from '../prisma/script'
import type { ITaskService } from '../types/task-service'

class TaskService implements ITaskService {
  async createTask({ name }: Pick<Task, 'name'>): Promise<Task | null> {
    try {
      const createdTask = await prisma.task.create({
        data: {
          name,
          completed: false,
        },
      })

      return createdTask
    } catch (err) {
      console.error('Error creating task:', err)
      throw new Error('Error creating task')
    }
  }

  async updateTask({
    id,
    name,
  }: Pick<Task, 'id' | 'name'>): Promise<Task | null> {
    try {
      const updatedTask = await prisma.task.update({
        where: { id },
        data: {
          name,
        },
      })

      return updatedTask
    } catch (err) {
      console.error('Error updating task:', err)
      throw new Error('Error updating task')
    }
  }

  async deleteTask({ id }: Pick<Task, 'id'>): Promise<Task | null> {
    try {
      const deletedTask = await prisma.task.delete({
        where: { id },
      })

      return deletedTask
    } catch (err) {
      console.error('Error deleting task:', err)
      throw new Error('Error deleting task')
    }
  }

  async getAllTasks(): Promise<Task[] | null> {
    try {
      const allTasks = await prisma.task.findMany()

      return allTasks
    } catch (err) {
      console.error('Error fetching all tasks:', err)
      throw new Error('Error fetching all tasks')
    }
  }

  async markAsCompleted({ id }: Pick<Task, 'id'>): Promise<Task | null> {
    try {
      const completedTask = await prisma.task.update({
        where: { id },
        data: {
          completed: true,
        },
      })

      return completedTask
    } catch (err) {
      console.error('Error marking task as completed:', err)
      throw new Error('Error marking task as completed')
    }
  }
}

export { TaskService }
