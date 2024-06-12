import { cn } from '@/lib/utils'
import { CarForm } from '../components/CarForm'
import { useMutation } from '@tanstack/react-query'
import { addCar } from '../api/carsApi'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'

const CarAddView = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: addCar,
    onSuccess: (res) => {
      navigate(routes.car(String(res.id)))
    }
  })

  return (
    <div className={cn('flex flex-col gap-8')}>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Add new car
      </h1>
      <CarForm onSubmit={mutation.mutate} />
    </div>
  )
}

export default CarAddView
