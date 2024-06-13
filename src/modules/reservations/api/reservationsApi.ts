import { ReservationModel, ReservationSchema } from './reservationsApi.model'
import { queryOptions } from '@tanstack/react-query'
import { fakeApiCall } from '@/lib/utils'

const mock: ReservationModel[] = [
  {
    id: 1,
    userId: 4,
    carId: 8,
    startDate: '2023-06-13',
    endDate: '2023-06-23',
    status: 'canceled'
  },
  {
    id: 2,
    userId: 5,
    carId: 5,
    startDate: '2024-04-14',
    endDate: '2024-04-24',
    status: 'canceled'
  },
  {
    id: 3,
    userId: 18,
    carId: 5,
    startDate: '2023-10-29',
    endDate: '2023-11-04',
    status: 'canceled'
  },
  {
    id: 4,
    userId: 15,
    carId: 7,
    startDate: '2023-09-12',
    endDate: '2023-09-21',
    status: 'confirmed'
  },
  {
    id: 5,
    userId: 10,
    carId: 6,
    startDate: '2023-07-07',
    endDate: '2023-07-17',
    status: 'canceled'
  },
  {
    id: 6,
    userId: 16,
    carId: 7,
    startDate: '2023-12-22',
    endDate: '2023-12-29',
    status: 'canceled'
  },
  {
    id: 7,
    userId: 20,
    carId: 4,
    startDate: '2023-07-15',
    endDate: '2023-07-16',
    status: 'confirmed'
  },
  {
    id: 8,
    userId: 3,
    carId: 4,
    startDate: '2023-10-05',
    endDate: '2023-10-10',
    status: 'completed'
  },
  {
    id: 9,
    userId: 20,
    carId: 10,
    startDate: '2023-12-19',
    endDate: '2023-12-21',
    status: 'confirmed'
  },
  {
    id: 10,
    userId: 6,
    carId: 10,
    startDate: '2023-06-29',
    endDate: '2023-07-04',
    status: 'completed'
  }
]

const getReservationList = () => fakeApiCall(mock)

const getReservation = (id: number) => fakeApiCall(mock[0])

export const addReservation = (data: ReservationSchema) =>
  fakeApiCall({ id: mock[0].id })

export const editReservation = ({
  reservationId,
  data
}: {
  reservationId: number
  data: ReservationSchema
}) => fakeApiCall({ reservationId, data })

export const getReservationListQueryOptions = queryOptions({
  queryKey: ['reservations', 'list'],
  queryFn: getReservationList
})

export const getReservationQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['reservations', id],
    queryFn: () => getReservation(id)
  })
