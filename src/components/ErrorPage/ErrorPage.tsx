import React from 'react';
import './ErrorPage.scss';

const ErrorPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="error-screen">
      <h1 className="error-screen-title">404</h1>
      <p className="error-screen-description">
        Whoops... Something went wrong!!!
      </p>
      <button className="error-screen-button" onClick={reloadPage}>
        Reload Page
      </button>
    </div>
  );
};

export default ErrorPage;
