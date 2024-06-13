import { AddCarResponse, CarModel, CarSchema } from './carsApi.model'
import { queryOptions } from '@tanstack/react-query'
import { api } from '@/lib/api'

const getCarList = () => api.get<CarModel[]>('/Car').then(({ data }) => data)

const getCar = (id: number) =>
  api.get<CarModel>(`/Car/${id}`).then(({ data }) => data)

export const addCar = (data: CarSchema) =>
  api.post<AddCarResponse>('/Car', data).then(({ data }) => data)

export const editCar = ({ carId, data }: { carId: number; data: CarSchema }) =>
  api.put(`/Car/${carId}`, data)

export const deleteCar = (carId: number) => api.delete(`/Car/${carId}`)

export const getCarListQueryOptions = queryOptions({
  queryKey: ['cars', 'list'],
  queryFn: getCarList
})

export const getCarQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['car', id],
    queryFn: () => getCar(id)
  })

export const getCarSelectQueryOptions = queryOptions({
  ...getCarListQueryOptions,
  select: (data) =>
    data.map((car) => ({
      value: String(car.id),
      description: `${car.make} ${car.model} (${car.licensePlate})`
    }))
})
