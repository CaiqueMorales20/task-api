import { Task } from '@prisma/client'
import { Request, Response, Router } from 'express'

import { TaskService } from '../services/task-service'

const taskRouter = Router()
const taskServices = new TaskService()

taskRouter.post('/', async (req: Request, res: Response) => {
  const { name } = req.body as Pick<Task, 'name'>

  try {
    const createdTask = await taskServices.createTask({ name })

    res.status(200).json(createdTask)
  } catch (err) {
    res.status(400).send(err)
  }
})

taskRouter.put('/:id', async (req: Request, res: Response) => {
  const { name } = req.body as Pick<Task, 'name'>
  const id = Number(req.params.id)

  try {
    const updatedTask = await taskServices.updateTask({ id, name })

    res.status(200).json(updatedTask)
  } catch (err) {
    res.status(400).send(err)
  }
})

taskRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const deletedTask = await taskServices.deleteTask({ id })

    res.status(200).json(deletedTask)
  } catch (err) {
    res.status(400).send(err)
  }
})

taskRouter.get('/', async (req: Request, res: Response) => {
  try {
    const allTasks = await taskServices.getAllTasks()

    res.status(200).json(allTasks)
  } catch (err) {
    res.status(400).send(err)
  }
})

taskRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const updatedTask = await taskServices.markAsCompleted({ id })

    res.status(200).json(updatedTask)
  } catch (err) {
    res.status(400).send(err)
  }
})

export { taskRouter }
