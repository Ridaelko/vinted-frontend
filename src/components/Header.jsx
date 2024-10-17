import { Link } from "react-router-dom";
import Button from "./Button";

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
              <Button text="S'inscrire" className="white-but" />
            </Link>
            <Link to="/login">
              <Button text="Se connecter" className="white-but" />
            </Link>
            <Link to="/publish">
              <Button text="Vends tes articles" className="blue-but" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
