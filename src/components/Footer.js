import apiLogo from '../media/apiLogo.png';

function Footer() {
  return (
    <footer>
      <div className="container footer flex">
        <img className='apiLogo' src={apiLogo} alt="API Logo" />
        <h2><a className="apiLink" href="https://valorant-api.com/v1/agents/" target='blank'>Valorant-API</a></h2>
      </div>
    </footer>
  )
}

export default Footer;