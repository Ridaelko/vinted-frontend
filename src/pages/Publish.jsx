import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

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
      <div className="h1-publish">
        <h1>Vends ton article</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="file">
          <Input
            className="input-publish"
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>

        <div className="title-description">
          <div className="title">
            <Label text="Titre" />
            <Input
              className="input-publish"
              type="text"
              value={title}
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="description-article">
            <Label text="Décris ton article" />
            <Input
              className="input-publish"
              type="text"
              placeholder="ex: porté quelque fois, taille M"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="details-publish">
          <div className="brand">
            <Label text="Marque" />
            <Input
              className="input-publish"
              type="text"
              value={brand}
              placeholder="ex: Zara"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="size">
            <Label text="Taille" />
            <Input
              className="input-publish"
              type="text"
              value={size}
              placeholder="ex: L/ 40 / 12"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>

          <div className="color">
            <Label text="Couleur" />
            <Input
              className="input-publish"
              type="text"
              value={color}
              placeholder="ex: Fushia"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>

          <div className="condition">
            <Label text="Etat" />
            <Input
              className="input-publish"
              type="text"
              value={condition}
              placeholder="Neuf avec étiquette"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>

          <div className="city">
            <Label text="Lieu" />
            <Input
              className="input-publish"
              type="text"
              value={city}
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="price-exchange">
          <div className="price">
            <Label text="Prix" />
            <Input
              className="input-publish"
              type="number"
              placeholder="ex: 25€"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>

          <div className="exchange">
            <Input
              className="input-exchange"
              type="checkbox"
              value={acceptedExchange}
              onChange={(event) => {
                setAcceptedExchange(!acceptedExchange);
              }}
            />
            <p>Je suis intéressé(e) par les échanges</p>
          </div>
        </div>

        <div className="div-button-publish">
          <Button className="button-publish" type="submit" text="Ajouter" />
        </div>
      </form>
    </div>
  );
};

export default Publish;
