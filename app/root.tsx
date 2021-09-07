import globalStyles from './styles/global.css'
import tailwindcss from './styles/tailwind.css'

import { Meta, Links, Scripts, useRouteData, LiveReload } from '@remix-run/react'
import { LinksFunction, LoaderFunction } from 'remix'
import { Outlet } from 'react-router-dom'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: tailwindcss },
  ]
}

export const loader: LoaderFunction = async () => {
  return { date: new Date() }
}

export default function App() {
  const data = useRouteData()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
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

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws uncaught errors.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
