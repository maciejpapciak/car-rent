import { z } from 'zod'

export type ReservationModel = {
  id: number
  userId: number
  carId: number
  startDate: string
  endDate: string
  status: string
}

export const ReservationSchema = z.object({
  userId: z.string().min(1),
  carId: z.string().min(1),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  status: z.string()
})

export type ReservationSchema = z.infer<typeof ReservationSchema>
