import React, { useState } from "react";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preperation, setPreperation] = useState("");
  const [picture, setPicture] = useState("");
  const [url, setUrl] = useState("");

  const handleFoodInformation = (e) => {
    e.preventDefault();
    setTitle("");    
    setDescription("");
    setPreperation("");
    setPicture("");
    setUrl("");
  };

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

         <button type="submit" className="btn btn-outline-primary w-100">Save</button>

        </form>
      </div>
    </div>
  );
};

export default Create;
