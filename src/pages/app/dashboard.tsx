import { Helmet } from 'react-helmet-async'

import { CardDashboard } from '@/components/card-dashboard'

export function Dashboard() {
  return (
    <section className="flex h-full flex-col gap-3  p-3 antialiased">
      <Helmet title="Dashboard" />
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-3xl font-bold ">Dashboard</h1>
        <div className="flex min-w-full justify-center gap-5">
          <CardDashboard
            tittle="Ganhos"
            description="Total de ganhos bruto"
            value={2000}
          />
          <CardDashboard
            tittle="Gastos"
            description="Total de gastos"
            value={211.3}
          />
          <CardDashboard
            tittle="Valor investido"
            description="Seu total investido"
            value={211.3}
          />
        </div>
      </div>
    </section>
  )
}
