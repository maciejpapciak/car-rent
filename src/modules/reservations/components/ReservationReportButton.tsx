import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { getReservationReport } from '../api/reservationsApi'
import { useParams } from 'react-router'
import download from 'downloadjs'

export const ReservationReportButton = () => {
  const { reservationId } = useParams()
  const { mutate, isPending } = useMutation({
    mutationFn: getReservationReport,
    onSuccess: (response: Blob) => {
      download(response, `report-${reservationId}.pdf`, 'application/pdf')
    }
  })
  return (
    <Button disabled={isPending} onClick={() => mutate(Number(reservationId))}>
      Download PDF Report
    </Button>
  )
}
