import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { CarCard } from '../components/CarCard'

const CarSingleView = () => {
  return (
    <div className={cn('flex flex-col gap-8')}>
      <Suspense fallback={<Spinner />}>
        <CarCard />
      </Suspense>
    </div>
  )
}

export default CarSingleView
