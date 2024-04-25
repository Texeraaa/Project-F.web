import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <h1 className="text-2xl font-black">Logo</h1>

        <Link
          to={'/'}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Página Inicial
        </Link>
      </nav>
    </header>
  )
}
