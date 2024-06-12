import { cn } from '@/lib/utils'
import { CarForm } from '../components/CarForm'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query'
import { Suspense, useMemo } from 'react'
import { editCar, getCarQueryOptions } from '../api/carsApi'
import { useNavigate, useParams } from 'react-router'
import { Spinner } from '@/components/ui/spinner'
import { CarSchema } from '../api/carsApi.model'
import { routes } from '@/lib/routes'

const CarEditView = () => {
  return (
    <div className={cn('flex flex-col gap-8')}>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Edit a car
      </h1>
      <Suspense fallback={<Spinner />}>
        <EditCarForm />
      </Suspense>
    </div>
  )
}

export default CarEditView

const EditCarForm = () => {
  const navigate = useNavigate()
  const { carId } = useParams()
  const { data: car } = useSuspenseQuery(
    useMemo(() => getCarQueryOptions(Number(carId)), [carId])
  )
  const queryClient = useQueryClient()

  const iniialValues: CarSchema = {
    licensePlate: car.licensePlate,
    make: car.make,
    model: car.model,
    pricePerDay: String(car.pricePerDay),
    statusId: String(car.statusId),
    year: String(car.year)
  }

  const mutation = useMutation({
    mutationFn: editCar,
    onSuccess: (res) => {
      queryClient.removeQueries(getCarQueryOptions(res.carId))
      navigate(routes.car(String(res.carId)))
    }
  })

  return (
    <CarForm
      initialValues={iniialValues}
      onSubmit={(data) => mutation.mutate({ carId: Number(carId), data })}
      carId={car.id}
    />
  )
}
