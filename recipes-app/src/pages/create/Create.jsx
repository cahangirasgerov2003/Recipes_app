import React, {  useContext, useEffect, useRef, useState } from "react";
import "./create.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {MainColorContext} from "../../contexts/MainColorContext"

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preperation, setPreperation] = useState("");
  const [picture, setPicture] = useState("");
  const [url, setUrl] = useState("");
  const [ingredient, setIngredient] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const refIngridientInput = useRef(null);
  const navigate = useNavigate();

  const {mainColor} = useContext(MainColorContext);
  
  const { data, postData } = useFetch("http://localhost:3000/tarifler", "POST") // {postData};

  const handleFoodInformation = (e) => {
    e.preventDefault();
    if(title && description && ingredients.length >0 && preperation && url && picture?.includes(".jpg") ){
      postData({baslik:title,aciklama:description,malzemeler:ingredients,hazirlanisi:preperation,resim:picture,url});
    }else{
      alert("All tabs are required to be filled !");
    }
    // setTimeout(()=>{
    //   setTitle("");    
    //   setDescription("");
    //   setIngredients([]);
    //   setPreperation("");
    //   setPicture("");
    //   setUrl("");
    // },1000);
    // setIngredient("");
  };

  const handleAddIngredients = (e) =>{
    e.preventDefault();
    if(ingredient?.trim() && !ingredients.includes(ingredient)){
       setIngredients((prevIngredients)=>{
           return [...prevIngredients, ingredient];
       });
    }
    refIngridientInput.current.focus();
    refIngridientInput.current.value="";
  }

  useEffect(()=>{
    if(data){
      alert("The information was successfully saved to the database !");
      navigate("/");
    }
  },[data, navigate]);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <form onSubmit={handleFoodInformation}>
          <div className="mb-3">
            <label htmlFor="baslik" className="form-label">
              Title : {title}
            </label>
            <input
              className="form-control"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              name="baslik"
              defaultValue="Halka Kebabı"
              id="baslik"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description : {description}
            </label>
            <input
              className="form-control"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              name="description"
              defaultValue="4-6 kişilik, 20dk Hazırlık, 1 saat 15dk Pişirme"
              id="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label">Ingredients : <ul className="mt-3">
              {ingredients.map((item,index)=>{
                return (
                  <li key={index}>{item}</li>
                )
              })}
              </ul></label>
            <div className="input-group">
              <input ref={refIngridientInput} type="text" className="form-control" placeholder="500 gram kıyma" id="ingredients" name="ingredients" onChange={(e)=>{
                 setIngredient(e.target.value);
              }} />
              <button className="btn text-white" onClick={handleAddIngredients} style={{ backgroundColor: mainColor }}>+</button>
             </div>
          </div>
          <div className="mb-3">
            <label htmlFor="preparation" className="form-label">
              Food preparation : {preperation}
            </label>
            <textarea
              className="form-control myTextarea"
              onChange={(e) => {
                setPreperation(e.target.value);
              }}
              name="preparation"
              defaultValue="Patlıcanların kabuklarını alacalı olarak soyalım ve yarım parmak genişliğinde dilimleyelim.Ardından su dolu kabın içerisine tuz ekleyip karıştıralım ve patlıcanları acısının çıkması için suya alarak 20 dakika bekletelim. Kabuklarını soyduğumuz soğanları da daire şeklinde dilimleyelim."
              id="preparation"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="picture" className="form-label">
              Picture : {picture}
            </label>
            <input
              className="form-control"
              onChange={(e) => {
                setPicture(e.target.value);
              }}
              type="text"
              name="picture"
              defaultValue="halka-kebabi.jpg"
              id="picture"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              Url : {url}
            </label>
            <input
              className="form-control"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              type="text"
              name="url"
              defaultValue="https://www.nefisyemektarifleri.com/video/halka-kebabi/"
              id="url"
            />
          </div>

         <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: mainColor }}>Save</button>

        </form>
      </div>
    </div>
  );
};

export default Create;
