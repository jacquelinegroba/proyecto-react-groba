import Carrito from "./Carrito.js"
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <> <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">Nombre del E-commerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="category/caballos" className="nav-link">Caballos</Link>
            </li>
            <li className="nav-item">
            <Link to="category/personas" className="nav-link">Personas</Link>
            </li>
          </ul>
        </div>
       <Carrito/>
      </div>
    </nav>
  </> 
    )
}

export default NavBar;