import { cn } from '@/lib/utils'
import { ReservationForm } from '../components/ReservationForm'
import { useMutation } from '@tanstack/react-query'
import { addReservation } from '../api/reservationsApi'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'
import { Suspense } from 'react'
import { Spinner } from '@/components/ui/spinner'

const ReservationAddView = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: addReservation,
    onSuccess: (res) => {
      navigate(routes.reservation(String(res.id)))
    }
  })

  return (
    <div className={cn('flex flex-col gap-8')}>
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Add new reservation
      </h1>
      <Suspense fallback={<Spinner />}>
        <ReservationForm onSubmit={mutation.mutate} />
      </Suspense>
    </div>
  )
}

export default ReservationAddView
