import { z } from 'zod'

export type CarModel = {
  id: number
  make: string
  model: string
  year: number
  licensePlate: string
  statusId: number
  pricePerDay: number
}

export const CarSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.string().min(1),
  licensePlate: z.string().min(1),
  statusId: z.string().transform(Number),
  pricePerDay: z.string().min(1)
})

export type CarSchema = z.infer<typeof CarSchema>

export type AddCarResponse = {
  id: number
}
