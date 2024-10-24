import { useState, useEffect } from "react";
import axios from "axios";

// IMPORT USEPARAMS POUR RECUPERER L'ID
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  // const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id} `
        );
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error ====>", error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>"Chargement ..."</p>
  ) : (
    <main>
      <div className="container">
        <div className="offers">
          <img src={data.product_image.secure_url} alt={data.product_name} />
          <div className="description">
            <p>{data.product_price}€ </p>
            <div className="info">
              {data.product_details.map((detail, index) => {
                const keys = Object.keys(detail);
                const key = keys[0];
                return (
                  <div className="key" key={index}>
                    <p className="detail-key">{key}</p>

                    <p className="to-justify">{detail[key]} </p>
                  </div>
                );
              })}

              <div className="user-info">
                <p className="product-name">{data.product_name} </p>
                <p>{data.product_description} </p>
                <div className="user-av-name">
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt={data.owner.account.username}
                  />
                  <p>{data.owner.account.username} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offer;
