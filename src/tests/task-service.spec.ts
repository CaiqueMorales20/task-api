import { Task } from '@prisma/client'

import { prismaMock } from '../prisma/singleton'
import { TaskService } from '../services/task-service'

const taskService = new TaskService()

// Mock data
const mockTask1: Task = {
  id: 1,
  name: 'Organizar o quarto',
  completed: true,
}

const mockTask2: Task = {
  id: 2,
  name: 'Estudar por 4h',
  completed: true,
}

describe('Task services', () => {
  // Successful scenarios
  it('should create a new task successfully', async () => {
    prismaMock.task.create.mockResolvedValue(mockTask1)

    await expect(
      taskService.createTask({ name: mockTask1.name }),
    ).resolves.toEqual(mockTask1)
  })

  it('should update a task successfully', async () => {
    prismaMock.task.update.mockResolvedValue(mockTask1)

    await expect(
      taskService.updateTask({ id: mockTask1.id, name: mockTask1.name }),
    ).resolves.toEqual(mockTask1)
  })

  it('should delete a task successfully', async () => {
    prismaMock.task.delete.mockResolvedValue(mockTask1)

    await expect(taskService.deleteTask({ id: mockTask1.id })).resolves.toEqual(
      mockTask1,
    )
  })

  it('should retrieve all tasks successfully', async () => {
    const mockTasks: Task[] = [mockTask1, mockTask2]

    prismaMock.task.findMany.mockResolvedValue(mockTasks)

    const result = await taskService.getAllTasks()
    expect(result).toEqual(mockTasks)
  })

  it('should mark a task as completed successfully', async () => {
    prismaMock.task.update.mockResolvedValue(mockTask1)

    await expect(
      taskService.markAsCompleted({ id: mockTask1.id }),
    ).resolves.toEqual(mockTask1)
  })

  // Error scenarios
  it('should handle error when creating a task', async () => {
    prismaMock.task.create.mockRejectedValue(new Error('Create task error'))

    await expect(
      taskService.createTask({ name: mockTask1.name }),
    ).rejects.toThrow('Error creating task')
  })

  it('should handle error when updating a task', async () => {
    prismaMock.task.update.mockRejectedValue(new Error('Update task error'))

    await expect(
      taskService.updateTask({ id: mockTask1.id, name: mockTask1.name }),
    ).rejects.toThrow('Error updating task')
  })

  it('should handle error when deleting a task', async () => {
    prismaMock.task.delete.mockRejectedValue(new Error('Delete task error'))

    await expect(taskService.deleteTask({ id: mockTask1.id })).rejects.toThrow(
      'Error deleting task',
    )
  })

  it('should handle error when retrieving all tasks', async () => {
    prismaMock.task.findMany.mockRejectedValue(new Error('Find tasks error'))

    await expect(taskService.getAllTasks()).rejects.toThrow(
      'Error fetching all tasks',
    )
  })

  it('should handle error when marking a task as completed', async () => {
    prismaMock.task.update.mockRejectedValue(new Error('Update task error'))

    await expect(
      taskService.markAsCompleted({ id: mockTask1.id }),
    ).rejects.toThrow('Error marking task as completed')
  })
})
