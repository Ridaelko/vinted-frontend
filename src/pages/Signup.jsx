import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("1 ====>");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return loading ? <p>Chargement ...</p> : <div>{data.email} </div>;
};

export default Signup;
