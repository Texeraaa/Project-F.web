import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export function Dashboard() {
  return (
    <section className="flex h-full flex-col gap-3  p-3 antialiased">
      <Helmet title="Dashboard" />
      <div className="flex items-start justify-center gap-3">
        <Card className="w-1/2 border-primary">
          <CardHeader>
            <CardTitle>Saldo total</CardTitle>
            <CardDescription>
              Seu saldo total da carteira digital
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between ">
            <p className="text-2xl font-bold">R$12,90</p>
            <Link
              to={'/extracts'}
              className="flex cursor-pointer items-center border-b-2  border-primary text-xl font-normal hover:text-primary"
            >
              <ChevronRight />
              Ver extrato
            </Link>
          </CardContent>
        </Card>{' '}
        <Card className="w-1/2 border-primary">
          <CardHeader>
            <CardTitle>Total gasto no mês</CardTitle>
            <CardDescription>Seu total gasto no mês</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between ">
            <p className="text-2xl font-bold">R$1200,90</p>
            <Link
              to={'/extracts'}
              className="flex cursor-pointer items-center border-b-2 border-primary text-xl font-normal hover:text-primary"
            >
              <ChevronRight />
              Ver extrato
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
