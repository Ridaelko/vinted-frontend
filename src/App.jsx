import "./App.css";

// IMPORT AXIOS
import axios from "axios";

// IMPORT USESTATE ET USEEFFECT
import { useState, useEffect } from "react";

// IMPORT DE REACT ROUTER, ET JE RENOMME BROWSERROUTER EN ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT DE PAGES
// import Home from "./pages/Home";

// IMPORT DES COMPONENTS
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <Header data={data} />
      <main>
        <article>
          {data.offers.map((pictures) => {
            {
              pictures.product_pictures.map((pic) => {
                <img src={pic.secure_url} alt="" />;
              });
            }
          })}
        </article>
      </main>
    </>
  );
};

export default App;
