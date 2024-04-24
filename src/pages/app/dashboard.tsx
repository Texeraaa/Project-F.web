import { Helmet } from 'react-helmet-async'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Dashboard() {
  return (
    <section className="flex gap-3 p-3">
      <Helmet title="Dashboard" />

      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>Saldo total</CardTitle>
          <CardDescription>Seu saldo total da carteira digital</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">R$12,90</p>
        </CardContent>
      </Card>
    </section>
  )
}
