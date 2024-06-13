import { Card, CardContent } from '@/components/ui/card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Fragment, useMemo } from 'react'
import { getCarQueryOptions } from '../api/carsApi'
import { useParams } from 'react-router'
import { CarModel } from '../api/carsApi.model'
import { carStatusMap } from '@/data/carStatus'
import { formatCurrency } from '@/lib/utils'

const cardConfig = (car: CarModel) => [
  {
    label: 'year',
    value: car.year
  },
  {
    label: 'licence plate',
    value: car.licensePlate
  },
  {
    label: 'status',
    value: carStatusMap?.[car.statusId]?.description
  },
  {
    label: 'price per day',
    value: formatCurrency(car.pricePerDay)
  }
]

export const CarCard = () => {
  const { carId } = useParams()
  const { data: car } = useSuspenseQuery(
    useMemo(() => getCarQueryOptions(Number(carId)), [carId])
  )

  const { make, model } = car

  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        {make} {model}
      </h1>
      <Card>
        <CardContent className="mt-4 flex flex-col gap-4">
          {cardConfig(car).map(({ label, value }) => (
            <Fragment key={label}>
              <p>
                <strong>{label}</strong> {value}
              </p>
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </>
  )
}
