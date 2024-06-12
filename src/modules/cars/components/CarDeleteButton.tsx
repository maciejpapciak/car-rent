import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCar, getCarListQueryOptions } from '../api/carsApi'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'

export const CarDeleteButton = ({ carId }: { carId: number }) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: getCarListQueryOptions.queryKey
      })
      navigate(routes.cars)
    }
  })

  const [open, setOpen] = useState(false)
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          variant={'destructive'}
        >
          <Trash />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Are you sure you want to delete this car?
            </p>
          </div>
          <div className="flex gap-8">
            <Button
              disabled={mutation.isPending}
              onClick={() => mutation.mutate(carId)}
              variant={'destructive'}
            >
              Yes
            </Button>
            <Button onClick={() => setOpen(false)} variant={'outline'}>
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
