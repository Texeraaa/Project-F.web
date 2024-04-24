import '../app/globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Helmet titleTemplate="%s | Finance" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
