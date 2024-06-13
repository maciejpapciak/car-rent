export const reservationStatusMap: Record<
  number,
  { value: string; description: string }
> = {
  1: {
    value: '1',
    description: 'Active'
  },
  2: {
    value: '2',
    description: 'Inactive'
  }
}

export const reservationStatuses = Object.values(reservationStatusMap)
