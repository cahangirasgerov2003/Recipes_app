import React, { useContext } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MainColorContext } from "../../contexts/MainColorContext";
// import { useLoaderData } from 'react-router-dom';

const Details = () => {
  // const selectedFood = useLoaderData();
  // const [selectedFood, setSelectedFood] = useState(null);
  const { id } = useParams();
  const url = `http://localhost:3000/tarifler/${id}`;

  const { data: selectedFood, loading, error } = useFetch(url);

  const {mainColor, mode} = useContext(MainColorContext);

  // useEffect(()=>{
  //   fetch(url).then((response)=>{
  //      return response.json();
  //   }).then((response)=>{
  //      setSelectedFood(response);
  //   });
  // }, [url]);

  return (
    <div className="row mt-3">
      {loading && (
        <div className="fa-3x d-flex justify-content-center">
          <i className="fas fa-circle-notch fa-spin loadingElement"></i>
        </div>
      )}
      {error && <div className="alert alert-danger">{`${error} !`}</div>}
      <div className="col-4">
        {!error && <img
          className="w-100"
          src={selectedFood?.id <=6 ?`/image/${selectedFood?.resim}`:selectedFood?.resim}
          alt={selectedFood?.basliq}
        ></img>}
      </div>
      <div className={`col-8 text-${mode === "dark" ? "white" : "dark"}`}>
        <h5 className="card-title">{selectedFood?.baslik}</h5>
        <p className="description mt-3">{selectedFood?.aciklama}</p>
        <ul>
          {selectedFood?.malzemeler.map((malzeme, index) => {
            return <li key={index}>{malzeme}</li>;
          })}
        </ul>
      </div>
      {!error && selectedFood && (
        <div className={`col-12 mt-2 text-${mode === "dark" ? "white" : "dark"}`}>
          <h6>{selectedFood?.hazirlanisi}</h6>
          <a
            href={selectedFood?.url}
            className="mt-1 btn text-white"
            style={{ backgroundColor: mainColor }}
            target="blank"
          >
            Video summary
          </a>
        </div>
      )}
    </div>
  );
};

// export const loaderDetails = async ({params}) =>{
//    const result = await (await fetch(`http://localhost:3000/tarifler/${params.id}`)).json();
//    return result;
// }

export default Details;
