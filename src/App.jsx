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
        <div className="container">
          <article>
            {data.offers.map((offer) => {
              return (
                <div className="offer">
                  <div className="owner">
                    <img src={offer.owner.account.avatar.url} alt="" />
                    <p>{offer.owner.account.username} </p>
                  </div>
                  <img
                    className="picture-article"
                    src={offer.product_image.url}
                    alt=""
                  />
                  <p className="price">{offer.product_price}€ </p>
                  {offer.product_details.map((details) => {
                    return (
                      <div className="details">
                        <p className="marque">{details.MARQUE}</p>{" "}
                        <p>{details.TAILLE} </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </article>
        </div>
      </main>
    </>
  );
};

export default App;
