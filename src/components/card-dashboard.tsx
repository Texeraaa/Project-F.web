import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardData {
  tittle: string
  description: string
  value: number
}

export function CardDashboard(props: CardData) {
  const formattedValue = props.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card className="w-1/3 ">
      <CardHeader>
        <CardTitle>{props.tittle}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between ">
        <p className="text-2xl font-bold">{formattedValue}</p>
      </CardContent>
    </Card>
  )
}
