import { LoaderFunction, MetaFunction, useRouteData } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix vercel template',
    description: 'Welcome to remix!',
  }
}

export const loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎. Yay' }
}

export default function Index() {
  const data = useRouteData()

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}
