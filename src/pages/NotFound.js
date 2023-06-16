import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <main className="container notFound flex">
      <Helmet>
        <title>Not Found | Agents</title>
      </Helmet>
      <div>
        <h2>Uh Oh</h2>
        <h3>Looks like the page you were looking for does not exist</h3>
      </div>
    </main>
  )
}

export default NotFound;