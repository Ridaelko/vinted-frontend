import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  // CE STATE SERT A GERER LES ERREUR DANS LE CATCH
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // setError(""); // on fait disparaître une éventuelle erreur
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",

        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      // console.log(response.data.token);

      Cookies.set("vinted-token", response.data.token);

      navigate("/");
    } catch (error) {
      console.log("error ===>", error);

      // J'AI MIS CA EN COMMENTAIRE CAR CA ME CREE DES ERREURS, JE VERRAI PLUS TARD
      // if (error.response.status === 409) {
      //   setErrorMessage("Cet email est déjà utilisé");
      // } else if (error.response.data.message === "Missing parameters") {
      //   setErrorMessage("Veuillez remplir tous les champs");
      // } else {
      //   setErrorMessage("Une erreur est survenue, veuillez réessayer");
      // }
    }
  };

  return (
    <div className="sign-form">
      <div className="sign-h1">
        <h1>S'inscrire</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="checkbox">
          <Input
            type="checkbox"
            value={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.value);
            }}
          />

          <label>S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <Button text="S'incrire" type="submit" />
        <Link to="/login">
          <p className="to-login">Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
      {/* {errorMessage && <p style={{ color: red }}>{error.message} </p>} */}
      {/* Je l'ai mis en commentaire car ça me donnait des erreurs, je verrai plus tard */}
    </div>
  );
};

export default Signup;
