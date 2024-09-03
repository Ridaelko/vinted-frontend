import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-container">
        <div className="top-head">
          <Link to="/">
            <img src="../src/assets/images/logo-a7c93c98.png" alt="vinted" />
          </Link>
          <div className="log-sign">
            <Link to="/signup">
              <button className="white-but">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="white-but">Se connecter</button>
            </Link>
            <button className="blue-but">Vends tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
