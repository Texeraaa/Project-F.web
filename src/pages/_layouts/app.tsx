import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-10">
      <div className="col-span-2">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
