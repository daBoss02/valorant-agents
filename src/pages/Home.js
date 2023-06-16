import Catalog from '../components/Catalog';
import { Helmet } from 'react-helmet';

function Home(props) {
  return (
    <main className="container">
      <Helmet>
        <title>Home | Agents</title>
      </Helmet>
      <Catalog 
        url={props.url}
      />
    </main>
  )
}

export default Home;