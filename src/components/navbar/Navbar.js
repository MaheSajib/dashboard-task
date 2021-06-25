import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ sidebarOpen , openSidebar}) => {
    let date = new Date().toUTCString().slice(0, 16);
    return (
        <nav className="navbar">
            <div className="nav-Icon" onClick={() => openSidebar()}>
                <h2>Dashboard</h2>
                <p >{date}</p>
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