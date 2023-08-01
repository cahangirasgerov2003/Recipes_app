import React from 'react'
import "./search.css";
import { useSearchParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import ProductDetails from '../../components/ProductDetails';

const Search = () => {
  const [query] = useSearchParams();
  const searchKeyword = query.get("q");
  const url = `http://localhost:3000/tarifler?q=${searchKeyword}`;
       const {data:results, loading, error} = useFetch(url);
  return (
    <div className='row mt-3'>
      <h3 className='text-primary'>Keyword : {searchKeyword}</h3>
      {loading && (
        <div className="fa-3x d-flex justify-content-center">
          <i className="fas fa-circle-notch fa-spin loadingElement"></i>
        </div>
      )}
      {error && <div className='alert alert-danger'>{error}</div>}
      {results?.length === 0 ? <div className='alert alert-warning'>No food was found for your keyword !</div> : results?.map((result, index)=>{
          return (
            <ProductDetails key={index} food={result} />
          )
      })}
    </div>
  )
}

export default Search;
