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

export function ReservationsDatatable() {
  const { data: reservations } = useSuspenseQuery(
    getReservationListQueryOptions
  )
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
            <TableCell>{reservation.carId}</TableCell>
            <TableCell>{reservation.userId}</TableCell>
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
                <Button
                  size={'sm'}
                  variant={'outline'}
                  onClick={() =>
                    navigate(routes.reservationEdit(String(reservation.id)))
                  }
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
