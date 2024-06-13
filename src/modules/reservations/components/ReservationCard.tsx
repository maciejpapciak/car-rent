import { Card, CardContent } from '@/components/ui/card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Fragment, useMemo } from 'react'
import { getReservationQueryOptions } from '../api/reservationsApi'
import { useParams } from 'react-router'
import dayjs from 'dayjs'
import { ReservationModel } from '../api/reservationsApi.model'
import { ReservationReportButton } from './ReservationReportButton'

const cardConfig = (reservation: ReservationModel) => [
  {
    label: 'User',
    value: `${reservation.user.firstName} ${reservation.user.lastName}`
  },
  {
    label: 'Car',
    value: `${reservation.car.make} ${reservation.car.model} (${reservation.car.licensePlate})`
  }
]

export const ReservationCard = () => {
  const { reservationId } = useParams()
  const { data: reservation } = useSuspenseQuery(
    useMemo(
      () => getReservationQueryOptions(Number(reservationId)),
      [reservationId]
    )
  )

  const { startDate, endDate } = reservation

  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        {[startDate, endDate].map((date) => dayjs(date)).join(' - ')}
      </h1>
      <Card>
        <CardContent className="mt-4 flex flex-col gap-4">
          {cardConfig(reservation).map(({ label, value }) => (
            <Fragment key={label}>
              <p>
                <strong>{label}</strong> {value}
              </p>
            </Fragment>
          ))}
          <p>
            <strong>Report</strong> <ReservationReportButton />
          </p>
        </CardContent>
      </Card>
    </>
  )
}
