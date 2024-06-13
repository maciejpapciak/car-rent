import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { ReservationSchema } from '../api/reservationsApi.model'
import { SelectField } from '@/components/form/SelectField'
import { CalendarField } from '@/components/form/CalendarField'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getUserSelectQueryOptions } from '@/modules/users/api/userApi'
import { getCarSelectQueryOptions } from '@/modules/cars/api/carsApi'
import { reservationStatuses } from '@/data/reservationStatus'

export function ReservationForm({
  initialValues,
  onSubmit
}: {
  initialValues?: ReservationSchema
  onSubmit: (data: ReservationSchema) => void
}) {
  const { data: userOptions } = useSuspenseQuery(getUserSelectQueryOptions)
  const { data: carOptions } = useSuspenseQuery(getCarSelectQueryOptions)
  const form = useForm<ReservationSchema>({
    resolver: zodResolver(ReservationSchema),
    defaultValues: {
      carId: '',
      endDate: '',
      startDate: '',
      status: '',
      userId: '',
      ...initialValues
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-lg"
      >
        <SelectField
          control={form.control}
          label="Car"
          name="carId"
          options={carOptions}
        />
        <SelectField label="Client" name="userId" options={userOptions} />
        <CalendarField
          control={form.control}
          label="Start date"
          name="startDate"
        />
        <CalendarField control={form.control} label="End date" name="endDate" />
        <SelectField
          label="Status"
          name="status"
          options={reservationStatuses}
        />
        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
