import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="top-container">
        <div className="top-head">
          <Link to="/">
            {" "}
            <img src="../src/assets/images/logo-a7c93c98.png" alt="vinted" />
          </Link>
          <div className="log-sign">
            <button onClick={() => navigate("/signup")} className="white-but">
              S'inscrire
            </button>
            <button className="white-but">Se connecter</button>
            <button className="blue-but">Vends tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
