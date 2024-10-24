import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Input from "../components/Input";

const Publish = () => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [acceptedExchange, setAcceptedExchange] = useState(false);

  const token = Cookies.get("token-vinted");
  //   console.log(token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <div>
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        <div className="file">
          <Input
            type="file"
            onChange={(event) => setPicture(event.target.files[0])}
          />
        </div>

        <div className="title-description">
          <Input
            type="text"
            value={title}
            placeholder="ex: Chemise Sézane verte"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <Input
            type="text"
            value={description}
            placeholder="ex: porté quelque fois, taille correctement"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div className="details">
          <Input
            type="text"
            value={brand}
            placeholder="ex: Zara"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />

          <Input
            type="text"
            value={size}
            placeholder="ex: L/ 40 / 12"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />

          <Input
            type="text"
            value={color}
            placeholder="ex: Fushia"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />

          <Input
            type="text"
            value={condition}
            placeholder="Neuf avec étiquette"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />

          <Input
            type="text"
            value={city}
            placeholder="ex: Paris"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>

        <div className="price-exchange">
          <Input
            type="number"
            placeholder="ex: 25€"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <div className="exchange">
            <Input
              type="checkbox"
              value={acceptedExchange}
              onChange={(event) => {
                setAcceptedExchange(event.target.value);
              }}
            />
            <span>Je suis intéressé(e) par les échanges</span>
          </div>
        </div>

        <Input type="submit" />
      </form>
    </div>
  );
};

export default Publish;
