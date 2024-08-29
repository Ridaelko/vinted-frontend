import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Signup = () => {
  //   const [data, setData] = useState(Cookies.get("token") || "");

  //   const handleSubmit = () => {
  //     axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup");
  //     Cookies.set("token", data.token);
  //   };

  return (
    <div className="sign-form">
      <div className="sign-h1">
        <h1>S'inscrire</h1>
      </div>
      <form /* onSubmit={handleSubmit} */>
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
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
