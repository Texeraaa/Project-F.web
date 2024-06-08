import { Outlet } from 'react-router-dom'

// import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen min-w-full bg-neutral-950 px-6">
      {/* <div className="col-span-12">
        <Header />
      </div> */}
      <div className="min-w-full">
        <Outlet />
      </div>
    </div>
  )
}
