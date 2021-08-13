import stylesUrl from '../styles/index.css'
import { useLoaderData } from '@remix-run/react'
import { LinksFunction, LoaderFunction, MetaFunction } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎. Yay' }
}

export default function Index() {
  let data = useLoaderData()

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}
