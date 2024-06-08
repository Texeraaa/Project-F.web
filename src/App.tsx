import '../app/globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | Finance" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
