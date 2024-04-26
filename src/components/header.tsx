import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Home, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar } from './ui/avatar'

export function Header() {
  return (
    <header className="min-h-screen min-w-52 bg-muted px-2 pt-2">
      <nav>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ul className="mt-4">
          <li className="flex items-center gap-1 border-b-2 border-muted-foreground py-5 text-xl font-black text-primary">
            <Home />
            <Link to={'/'}>Página Inicial</Link>
          </li>{' '}
          <li className="flex items-center gap-1 border-b-2 border-muted-foreground py-5 text-xl font-semibold text-popover-foreground">
            <Newspaper />
            <Link to={'/extracts'}>Extrato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
