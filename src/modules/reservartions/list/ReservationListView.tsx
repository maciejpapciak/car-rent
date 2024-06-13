import { Suspense } from 'react'
import { ReservationsDatatable } from '../components/ReservationsDatatable'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'

const ReservationListView = () => {
  const navigate = useNavigate()

  return (
    <div className={cn('flex flex-col gap-8')}>
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
          Reservations
        </h1>
        <Button onClick={() => navigate(routes.reservationAdd)}>
          Create new reservation
        </Button>
      </div>
      <Suspense fallback={<Spinner />}>
        <ReservationsDatatable />
      </Suspense>
    </div>
  )
}

export default ReservationListView
