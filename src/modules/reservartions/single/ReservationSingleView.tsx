import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { ReservationCard } from '../components/ReservationCard'

const ReservationSingleView = () => {
  return (
    <div className={cn('flex flex-col gap-8')}>
      <Suspense fallback={<Spinner />}>
        <ReservationCard />
      </Suspense>
    </div>
  )
}

export default ReservationSingleView
