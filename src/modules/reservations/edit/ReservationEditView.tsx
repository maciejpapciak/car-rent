import { cn } from '@/lib/utils'
import { ReservationForm } from '../components/ReservationForm'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query'
import { Suspense, useMemo } from 'react'
import {
  editReservation,
  getReservationQueryOptions
} from '../api/reservationsApi'
import { useNavigate, useParams } from 'react-router'
import { Spinner } from '@/components/ui/spinner'
import { ReservationSchema } from '../api/reservationsApi.model'
import { routes } from '@/lib/routes'

const ReservationEditView = () => {
  return (
    <div className={cn('flex flex-col gap-8')}>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Edit a car
      </h1>
      <Suspense fallback={<Spinner />}>
        <ReservationEditForm />
      </Suspense>
    </div>
  )
}

export default ReservationEditView

const ReservationEditForm = () => {
  const navigate = useNavigate()
  const { reservationId } = useParams()
  const { data: reservation } = useSuspenseQuery(
    useMemo(
      () => getReservationQueryOptions(Number(reservationId)),
      [reservationId]
    )
  )
  const queryClient = useQueryClient()

  const iniialValues: ReservationSchema = {
    carId: String(reservation.carId),
    endDate: String(reservation.endDate),
    startDate: String(reservation.startDate),
    status: reservation.status,
    userId: String(reservation.userId)
  }

  const mutation = useMutation({
    mutationFn: editReservation,
    onSuccess: () => {
      queryClient.removeQueries(
        getReservationQueryOptions(Number(reservationId))
      )
      navigate(routes.car(String(reservationId)))
    }
  })

  return (
    <ReservationForm
      initialValues={iniialValues}
      onSubmit={(data) =>
        mutation.mutate({ reservationId: Number(reservationId), data })
      }
    />
  )
}
