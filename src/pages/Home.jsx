import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <h1>Je suis Home</h1>
      <Link to="/offer">Offer par ici</Link>
    </>
  );
};

export default Home;
