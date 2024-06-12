import { Suspense } from 'react'
import { CarDatatable } from '../components/CarDatatable'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'

const CarListView = () => {
  const navigate = useNavigate()

  return (
    <div className={cn('flex flex-col gap-8')}>
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
          Available Cars
        </h1>
        <Button onClick={() => navigate(routes.carAdd)}>Add new car</Button>
      </div>
      <Suspense fallback={<Spinner />}>
        <CarDatatable />
      </Suspense>
    </div>
  )
}

export default CarListView
