import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function CropInfoPage() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/plant-datasheets/vegetables")
      .then(res => res.json())
      .then(data => {
        setCrops(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <header><h2>Crop Info Page</h2></header>
      {crops.length === 0 ? (
        <p>No vegetable crops found.</p>
      ) : (
        <ul>
          {crops.map((crop) => (
            <li key={crop.id}>
              <strong>{crop.plantName}</strong> - {crop.type}<br />
              EC: {crop.idealEC} | pH: {crop.idealPH}<br />
              Germination: {crop.averageDaysToGerminate} days, Morphogenesis: {crop.averageDaysToMorphogenesis} days
            </li>
          ))}
        </ul>
      )}
      <Link to="/add-new-crop">Add New Crop</Link>
    </div>
  );
}

export default CropInfoPage;
