import { Card, CardContent } from '@/components/ui/card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Fragment, useMemo } from 'react'
import { getReservationQueryOptions } from '../api/reservationsApi'
import { useParams } from 'react-router'
import { Separator } from '@/components/ui/separator'
import dayjs from 'dayjs'

export const ReservationCard = () => {
  const { reservationId } = useParams()
  const { data: reservation } = useSuspenseQuery(
    useMemo(
      () => getReservationQueryOptions(Number(reservationId)),
      [reservationId]
    )
  )

  const { id, startDate, endDate, ...reservationRest } = reservation

  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        {[startDate, endDate].map((date) => dayjs(date)).join(' - ')}
      </h1>
      <Card>
        <CardContent className="mt-4 flex flex-col gap-4">
          {Object.entries(reservationRest).map(([key, value], i) => (
            <Fragment key={key}>
              <p>
                <strong>{key}</strong> {value}
              </p>
              {i !== Object.keys(reservationRest).length - 1 && <Separator />}
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </>
  )
}
