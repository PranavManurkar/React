import React, { useEffect, useState } from 'react';
import 'C:/Users/prana/OneDrive/Desktop/react/my-app/src/components/Card.css'; // Import the card component CSS
import 'C:/Users/prana/OneDrive/Desktop/react/my-app/src/components/HomeBackground.css'; // Import the foggy background image CSS

const HomePage = () => {
  const [prediction, setPrediction] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://9097-34-141-213-252.ngrok-free.app/pred', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result);
    setPrediction(result.prediction);
  };


  return (
    <div className="home-background">
      <div className="overlay"></div>
      <div className="page-container">
        <div className="card">
          <div className="card-header">
            Enter the data in .set format
          </div>
          <div className="card-body">
            <input type="file" onChange={handleUpload} />
          </div>
          <div className="card-footer">
            <button className="button">
              Upload
            </button>
          </div>
        </div>


        <div className="card results-card">
          <div className="card-header">
            Results:
          </div>

          <div className="card-body">
          {prediction? (
              <p>{prediction}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
