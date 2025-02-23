//Navbar
export default function NavBar({ links }) {
    return (
      <nav className="navbar navbar-expand-sm nav-section shadow">
        <div className="container-fluid ">
          <div 
           id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  