import './style.css'

const Header = () =>{


  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <a href="#">
            <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 27.7899C0 25.5299 0.44513 23.2919 1.31003 21.204C2.17494 19.1159 3.4426 17.2187 5.04072 15.6206C6.63883 14.0225 8.53599 12.7548 10.624 11.8899C12.7121 11.0251 14.95 10.5799 17.2101 10.5799V27.7899H0Z" fill="#442781"/>
              <path d="M0 27.7899C0 30.05 0.44513 32.2879 1.31003 34.376C2.17494 36.464 3.4426 38.3612 5.04072 39.9593C6.63883 41.5574 8.53599 42.8251 10.624 43.69C12.7121 44.5549 14.95 45 17.2101 45V27.7899H0Z" fill="#61459C"/>
              <path d="M34.42 27.7899C34.42 30.05 33.9752 32.2879 33.1104 34.376C32.2455 36.464 30.9779 38.3612 29.3795 39.9593C27.7814 41.5574 25.8842 42.8251 23.7961 43.69C21.7082 44.5549 19.4702 45 17.2102 45V27.7899H34.42Z" fill="#A992DB"/>
              <path d="M45.0313 12.922C45.0313 20.0586 39.2457 25.844 32.1092 25.844H19.1873V12.922C19.1873 5.7854 24.9727 0 32.1092 0C39.2457 0 45.0313 5.7854 45.0313 12.922Z" fill="#FF7917"/>
            </svg>
          </a>  
          <span>Book Haven</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="/books">Book</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#" className="btn btn-outline">Sign in</a>
          <a href="#" className="btn btn-primary">Join us</a>
        </div>
      </div>
    </header>
  );
};


export default Header;
