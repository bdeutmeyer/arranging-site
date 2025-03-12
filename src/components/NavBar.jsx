//Navbar
import BDLogo from "../assets/images/BD-logo.svg";

export default function NavBar({ links }) {
    return (
      <nav className="navbar navbar-expand-sm nav-section shadow">
        <div className="container-fluid">
          <div 
           id="navbarSupportedContent">
            <ul className="navbar-nav bg-dark me-auto mb-2 mb-lg-0">
              <img src={BDLogo} alt="BD Logo" className='w-50 h-auto'/>
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  