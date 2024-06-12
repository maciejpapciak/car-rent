// import { api } from '@/lib/api'
import { CarModel, CarSchema } from './carsApi.model'
import { queryOptions } from '@tanstack/react-query'
import { fakeApiCall } from '@/lib/utils'

// const getCarList = () => api.get<CarModel>('/cars').then(({ data }) => data)

const mock: CarModel[] = [
  {
    id: 1,
    make: 'Ford',
    model: 'Camaro',
    year: 2017,
    licensePlate: '0405',
    statusId: 1,
    pricePerDay: 87.34
  },
  {
    id: 2,
    make: 'Ford',
    model: 'Mustang',
    year: 2020,
    licensePlate: 'M58 6RM',
    statusId: 1,
    pricePerDay: 44.93
  },
  {
    id: 3,
    make: 'Nissan',
    model: 'Civic',
    year: 2000,
    licensePlate: '8AUL809',
    statusId: 2,
    pricePerDay: 95.76
  },
  {
    id: 4,
    make: 'Ford',
    model: 'Corolla',
    year: 2011,
    licensePlate: '1KSE 41',
    statusId: 1,
    pricePerDay: 46.72
  },
  {
    id: 5,
    make: 'Chevrolet',
    model: 'Mustang',
    year: 2000,
    licensePlate: 'RIT-3808',
    statusId: 1,
    pricePerDay: 81.3
  },
  {
    id: 6,
    make: 'Nissan',
    model: 'Camaro',
    year: 2016,
    licensePlate: 'V22-68E',
    statusId: 2,
    pricePerDay: 54.26
  },
  {
    id: 7,
    make: 'Honda',
    model: 'Camaro',
    year: 2011,
    licensePlate: '919 OXM',
    statusId: 1,
    pricePerDay: 79.94
  },
  {
    id: 8,
    make: 'Chevrolet',
    model: 'Civic',
    year: 2014,
    licensePlate: '89D-480',
    statusId: 3,
    pricePerDay: 83.5
  },
  {
    id: 9,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2013,
    licensePlate: '0V 4L7ENR',
    statusId: 1,
    pricePerDay: 46.27
  },
  {
    id: 10,
    make: 'Toyota',
    model: 'Camaro',
    year: 2000,
    licensePlate: 'YJV 005',
    statusId: 3,
    pricePerDay: 89.2
  }
]

const getCarList = () => fakeApiCall(mock)

const getCar = (id: number) => fakeApiCall(mock[0])

export const addCar = (data: CarSchema) => fakeApiCall({ id: mock[0].id })

export const editCar = ({ carId, data }: { carId: number; data: CarSchema }) =>
  fakeApiCall({ carId, data })

export const deleteCar = (carId: number) => fakeApiCall(carId)

export const getCarListQueryOptions = queryOptions({
  queryKey: ['cars', 'list'],
  queryFn: getCarList
})

export const getCarQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['car', id],
    queryFn: () => getCar(id)
  })
