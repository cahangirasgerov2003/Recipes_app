import React, { useEffect, useState } from 'react'
import "./home.css";
import ProductDetails from '../../components/ProductDetails';


const Home = () => {

  const [foods, setFoods] = useState(null);


  useEffect(()=>{
    fetch("http://localhost:3000/tarifler").then((response)=>{
        return response.json();
    }).then((response)=>{
      setFoods(response);
    });    
  },[]);

  return (
    <div className='row mt-3'>
      {foods?.map((food)=>{
        return (
         <ProductDetails food={food} key={food.id} /> 
        )
      })}
    </div>
  )
}

export default Home;