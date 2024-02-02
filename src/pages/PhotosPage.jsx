import React, { useEffect, useState } from "react";
import PhotoList from "../components/PhotoList";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default Photos;
