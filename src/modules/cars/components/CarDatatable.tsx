import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCarListQueryOptions } from '../api/carsApi'
import { formatCurrency } from '@/lib/utils'
import { Edit, Eye } from 'lucide-react'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'

export function CarDatatable() {
  const { data: cars } = useSuspenseQuery(getCarListQueryOptions)
  const navigate = useNavigate()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Licence plate</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price (per day)</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell>{car.id}</TableCell>
            <TableCell>
              {[car.make, car.model].filter(Boolean).join(' ')}{' '}
              {car.year && `(${car.year})`}
            </TableCell>
            <TableCell>{car.licensePlate}</TableCell>
            <TableCell>{car.statusId}</TableCell>
            <TableCell>{formatCurrency(car.pricePerDay)}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  onClick={() => navigate(routes.car(String(car.id)))}
                  size={'sm'}
                >
                  <Eye />
                </Button>
                <Button
                  size={'sm'}
                  variant={'outline'}
                  onClick={() => navigate(routes.carEdit(String(car.id)))}
                >
                  <Edit />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
