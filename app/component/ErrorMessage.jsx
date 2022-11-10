import { Link } from "@remix-run/react";

export default function ErrorMessage({ error }) {
  return (
  <div>
    <h1>Something went wrong</h1>
    <p>{error.message}</p>
    <Link to="/">Home</Link>
  </div>
  )
}
