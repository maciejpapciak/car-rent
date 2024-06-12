import { Card, CardContent } from '@/components/ui/card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Fragment, useMemo } from 'react'
import { getCarQueryOptions } from '../api/carsApi'
import { useParams } from 'react-router'
import { Separator } from '@/components/ui/separator'

export const CarCard = () => {
  const { carId } = useParams()
  const { data: car } = useSuspenseQuery(
    useMemo(() => getCarQueryOptions(Number(carId)), [carId])
  )

  const { make, model, ...carRest } = car

  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        {make} {model}
      </h1>
      <Card>
        <CardContent className="mt-4 flex flex-col gap-4">
          {Object.entries(carRest).map(([key, value], i) => (
            <Fragment key={key}>
              <p>
                <strong>{key}</strong> {value}
              </p>
              {i !== Object.keys(carRest).length - 1 && <Separator />}
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </>
  )
}
