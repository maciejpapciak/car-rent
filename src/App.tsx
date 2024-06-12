import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CarListView from './modules/cars/list/CarListView'
import { routes } from './lib/routes'
import CarAddView from './modules/cars/add/CarAddView'
import CarEditView from './modules/cars/edit/CarEditView'
import CarSingleView from './modules/cars/single/CarSingleView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: routes.cars,
        element: <CarListView />
      },
      {
        path: routes.carAdd,
        element: <CarAddView />
      },
      {
        path: routes.carEdit(),
        element: <CarEditView />
      },
      {
        path: routes.car(),
        element: <CarSingleView />
      }
    ]
  }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
