export const routes = {
  cars: '/',
  carAdd: '/add',
  car: (carId = ':carId') => `/cars/${carId}`,
  carEdit: (carId = ':carId') => `/cars/${carId}/edit`,
  reservations: '/reservations',
  reservationAdd: '/reservations/add',
  reservation: (reservationId = ':reservationId') =>
    `/reservations/${reservationId}`,
  reservationEdit: (reservationId = ':reservationId') =>
    `/reservations/${reservationId}/edit`
}
