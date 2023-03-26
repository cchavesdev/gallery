import React, { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
   setTimeout(() => {
    setIsLoading(false);
   }, 5000);
    
  }, []);

  return (
    <div>
      {isLoading ? (
        <div id="loadingSpinner">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoadingSpinner;
