import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Equipassion
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to={'/category/caballos'} className="nav-link">
                  Caballos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/category/personas'} className="nav-link">
                  Personas
                </Link>
              </li>
            </ul>
          </div>
          <div className="pe-3">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;