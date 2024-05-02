import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const GlobalErrors = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="globalError">
        <h2>Error :</h2>
        <p>This page doesn't exist!</p>
        <Link to="/">
          Home <i className="fa-solid fa-backward"></i>
        </Link>
      </div>
    );
  }

  if (error.status === 401) {
    return (
      <div className="globalError">
        <h2>Error :</h2>
        <p>You aren't authorized to see this</p>
        <Link to="/">
          Home <i className="fa-solid fa-backward"></i>
        </Link>
      </div>
    );
  }

  if (error.status === 503) {
    return (
      <div className="globalError">
        <h2>Error :</h2>
        <p>Looks like our API is down</p>
        <Link to="/">
          Home <i className="fa-solid fa-backward"></i>
        </Link>
      </div>
    );
  }

  if (error.status === 418) {
    return (
      <div className="globalError">
        <h2>Error :</h2>
        <p>
          I'm like a teapot, so I can't give you the drink you want &#128518;
        </p>
        <Link to="/">
          Home <i className="fa-solid fa-backward"></i>
        </Link>
      </div>
    );
  }
};
