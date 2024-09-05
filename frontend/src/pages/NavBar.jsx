import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top shadow-sm"
      style={{
        borderRadius: '0 0 15px 15px'
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center" onClick={() => handleClick('/')}>
          <Link to="/" className="d-flex align-items-center">
            <img src={logo} alt="logo" height="30" style={{ marginRight: '10px' }} />
            <img src={logoDark} alt="dark logo" height="30" className="d-none" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {['Products', 'Services', 'Offers', 'About Us'].map((item, index) => (
              <li className="nav-item" key={index}>
                <button
                  onClick={() => handleClick(`/${item.toLowerCase().replace(' ', '-')}`)}
                  className="btn btn-link text-white text-uppercase fw-bold px-3 py-2 m-2"
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    transition: 'color 0.3s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#dddddd';
                    e.currentTarget.style.cursor = 'pointer';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  {item}
                  <span
                    style={{
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '2px',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                onClick={() => handleClick('/login')}
                className="btn btn-light btn-sm rounded-pill px-3 py-2 shadow-sm"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: '1px solid #cccccc',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease-in-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
