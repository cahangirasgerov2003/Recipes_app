import React from "react";
import "./home.css";
import ProductDetails from "../../components/ProductDetails";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  // const [foods, setFoods] = useState(null);

  // useEffect(()=>{
  //   fetch("http://localhost:3000/tarifler").then((response)=>{
  //       return response.json();
  //   }).then((response)=>{
  //     setFoods(response);
  //   });
  // },[]);

  const { data: foods, loading, error } = useFetch("http://localhost:3000/tarifler");
  console.log(error);
  return (
    <div className="row mt-3">
      {loading && (
        <div className="fa-3x d-flex justify-content-center">
          <i className="fas fa-circle-notch fa-spin loadingElement"></i>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {foods && foods.map((food) => {
        return <ProductDetails food={food} key={food.id} />;
      })}
    </div>
  );
};

export default Home;
