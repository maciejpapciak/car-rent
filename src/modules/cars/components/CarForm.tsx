import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CarDeleteButton } from './CarDeleteButton'
import { CarSchema } from '../api/carsApi.model'
import { TextField } from '@/components/form/TextField'
import { SelectField } from '@/components/form/SelectField'
import { carStatuses } from '@/data/carStatus'

export function CarForm({
  initialValues,
  onSubmit,
  carId
}: {
  initialValues?: CarSchema
  onSubmit: (data: CarSchema) => void
  carId?: number
}) {
  const form = useForm<CarSchema>({
    resolver: zodResolver(CarSchema),
    defaultValues: {
      licensePlate: '',
      make: '',
      model: '',
      pricePerDay: '',
      statusId: 1,
      year: '',
      ...initialValues
    }
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-lg"
      >
        <TextField control={form.control} name="make" label="Make" />
        <TextField control={form.control} name="model" label="Model" />
        <TextField
          control={form.control}
          name="year"
          label="Year"
          inputMode="numeric"
        />
        <TextField
          control={form.control}
          name="licensePlate"
          label="License plate"
        />
        <TextField
          control={form.control}
          name="pricePerDay"
          label="Price per day (USD)"
          inputMode="numeric"
        />
        <SelectField
          control={form.control}
          name="statusId"
          label="Status"
          options={carStatuses}
        />

        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          {carId && <CarDeleteButton carId={carId} />}
        </div>
      </form>
    </Form>
  )
}
