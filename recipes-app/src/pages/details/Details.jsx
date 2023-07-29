import React from 'react'
import "./details.css";
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const selectedFood = useLoaderData();
  return (
    <div className='row mt-3'>
      <div className='col-4'>
          <img className='w-100' src={`/image/${selectedFood.resim}`} alt={selectedFood.basliq}></img>
      </div>
      <div className="col-8 rightInfoSelectedFood">
          <h5 className="card-title">{selectedFood.baslik}</h5>
          <p className="description">{selectedFood.aciklama}</p>
          <ul>
             {selectedFood.malzemeler.map((malzeme, index)=>{
                return (
                  <li key={index}>{malzeme}</li>
                )
             })}
          </ul>
      </div>
      <div className='col-12 mt-2'>
           <h6>{selectedFood.hazirlanisi}</h6>
           <a href={selectedFood.url} className='btn btn-outline-primary mt-1' target='blank'>
              Video summary
           </a>
      </div>
    </div>
  )
}

export const loaderDetails = async ({params}) =>{
   const result = await (await fetch(`http://localhost:3000/tarifler/${params.id}`)).json();
   return result;
}


export default Details;
