import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Signup = () => {
  const [data, setData] = useState(Cookies.get("token") || "");

  const handleSubmit = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup"
          );
          setData(response.data);
          Cookies.set("token", response.data.token);
        } catch (error) {
          console.log(error);
        }
      };
    }, []);
  };

  return (
    <div className="sign-form">
      <div className="sign-h1">
        <h1>S'inscrire</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <div className="checkbox">
          <input type="checkbox" />
          <label>S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
      </form>
      {/* <Link to="/login" >Tu as déjà un compte ? Connecte-toi !</Link> */}
    </div>
  );
};

export default Signup;
