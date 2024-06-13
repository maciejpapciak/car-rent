import { MainNav } from '../components/main-nav'
import { Outlet } from 'react-router'

export default function Dashboard() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 max-w-7xl">
          <Outlet />
        </div>
      </div>
    </>
  )
}
