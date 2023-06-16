import { Link, NavLink } from "react-router-dom";
import logo from '../media/logo.png'

function Header() {
  return (
    <header>
      <div className="container flex">
        <div className="title flex">
          <img className="logo" src={logo} alt="Valorant Logo" />
          <h1><Link className="homeLink" to='/'>Agents</Link></h1>
        </div>
        <nav>
          <ul>
            <li>
            <NavLink to="/valorant-agents/new"
                className={`${navData => (navData.isActive ? "active" : "")} newLink`}
              >Create New</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;