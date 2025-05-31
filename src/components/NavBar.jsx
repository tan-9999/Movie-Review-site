import '../css/NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
    return  <nav className="navbar">
                <div className="navbar-brand">
                <img src="./public/cenema.svg" alt="Logo" className="navbar-logo" />
                
                    <Link to="/">StreamBox</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/favorates" className="nav-link">Favorates</Link>
                </div>
            </nav>
}

export default NavBar