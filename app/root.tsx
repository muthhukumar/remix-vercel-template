import globalStyles from './styles/global.css'
import tailwindcss from './styles/tailwind.css'

import { Meta, Links, Scripts, useRouteData, LiveReload } from '@remix-run/react'
import { LinksFunction, LoaderFunction, MetaFunction } from 'remix'
import { Outlet } from 'react-router-dom'

import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-regular.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-500.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/roboto-v27-latin-500.woff',
      type: 'font/woff',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: tailwindcss },
    { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: `Remix vercel template`,
    description: 'Muthukumar is a frontend developer, who loves to code.',
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    charSet: 'utf-8',
  }
}

export const loader: LoaderFunction = async () => {
  return { date: new Date() }
}

function App() {
  const data = useRouteData()

  const { theme } = useTheme()

  return (
    <html lang="en" className={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls />
      </head>
      <body className="bg-primary">
        <Outlet />

        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>

        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
