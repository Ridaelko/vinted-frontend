import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      Cookies.set("token-vinted", response.data.token);
      navigate("/");
    } catch (error) {
      console.log("error ===>", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-form">
        <h1>Se connecter</h1>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Se connecter</button>
        <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>{" "}
        </Link>
      </div>
    </form>
  );
};

export default Login;
