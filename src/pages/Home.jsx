// // IMPORT AXIOS
import axios from "axios";

// // IMPORT USESTATE ET USEEFFECT
import { useState, useEffect } from "react";

// IMPORT DE LINK
import { Link } from "react-router-dom";

const Home = () => {
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
      <main>
        <div className="container">
          {data.offers.map((offer) => {
            return (
              <Link to={`/offers/${offer._id} `} key={offer._id}>
                <article>
                  <div className="offer">
                    <div className="owner">
                      {offer.owner.account.avatar && (
                        <img
                          src={offer.owner.account.avatar.url}
                          alt={offer.owner.account.username}
                        />
                      )}

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
                </article>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
