import "./Navbar.css";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ sidebarOpen , openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-Icon" onClick={() => openSidebar()}>
                <h2>Dashboard</h2>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="navbar-left">
                
            </div>
            <div className="navbar-right">
                <a href="#">
                    <button className="menu-button"><FontAwesomeIcon icon={faPlus} /> Add</button>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faSearch} />

                    <input className="search" type="text" placeholder="Search for application here"/>
                </a>
            </div>
        </nav>
    )

}

export default Navbar;