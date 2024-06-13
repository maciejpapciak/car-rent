import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getReservationListQueryOptions } from '../api/reservationsApi'
import { Edit, Eye } from 'lucide-react'
import { useNavigate } from 'react-router'
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'
import dayjs from 'dayjs'
import { getUserSelectQueryOptions } from '@/modules/users/api/userApi'
import {
  getCarListQueryOptions,
  getCarSelectQueryOptions
} from '@/modules/cars/api/carsApi'

export function ReservationsDatatable() {
  const { data: reservations } = useSuspenseQuery(
    getReservationListQueryOptions
  )
  const { data: users } = useSuspenseQuery(getUserSelectQueryOptions)
  const { data: cars } = useSuspenseQuery(getCarSelectQueryOptions)

  const navigate = useNavigate()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>User</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reservations.map((reservation) => (
          <TableRow key={reservation.id}>
            <TableCell>{reservation.id}</TableCell>
            <TableCell>
              {[reservation.startDate, reservation.endDate]
                .map((date) => dayjs(date).format('DD MMM HH:mm'))
                .join(' - ')}
            </TableCell>
            <TableCell>
              {
                cars.find((car) => Number(car.value) === reservation.carId)
                  ?.description
              }
            </TableCell>
            <TableCell>
              {
                users.find((user) => Number(user.value) === reservation.userId)
                  ?.description
              }
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    navigate(routes.reservation(String(reservation.id)))
                  }
                  size={'sm'}
                >
                  <Eye />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
