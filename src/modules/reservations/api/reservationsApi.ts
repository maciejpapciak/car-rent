import {
  AddReservationResponse,
  ReservationModel,
  ReservationSchema
} from './reservationsApi.model'
import { queryOptions } from '@tanstack/react-query'
import { api } from '@/lib/api'

const getReservationList = () =>
  api.get<ReservationModel[]>('/Reservation').then(({ data }) => data)

const getReservation = (id: number) =>
  api.get<ReservationModel>(`/Reservation/${id}`).then(({ data }) => data)

export const addReservation = (data: ReservationSchema) =>
  api
    .post<AddReservationResponse>('/Reservation', data)
    .then(({ data }) => data)

export const editReservation = ({
  reservationId,
  data
}: {
  reservationId: number
  data: ReservationSchema
}) => api.put(`/Reservation/${reservationId}`, data)

export const getReservationReport = (id: number): Promise<Blob> =>
  api
    .get(`/Report/${id}`, {
      responseType: 'blob',
      headers: {
        Accept: 'application/octet-stream'
      }
    })
    .then(({ data }) => data)

export const getReservationListQueryOptions = queryOptions({
  queryKey: ['reservations', 'list'],
  queryFn: getReservationList
})

export const getReservationQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['reservations', id],
    queryFn: () => getReservation(id)
  })
