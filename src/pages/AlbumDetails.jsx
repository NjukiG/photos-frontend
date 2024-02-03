import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetails = () => {
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/albums/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data);
        setPhotos(data.photos);
      })
      .catch((error) => console.error("Error fetching albums:", error));
  }, [id]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos &&
        photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <img
              alt="Developer"
              src={photo.image_url}
              className="object-cover w-full h-full rounded-lg transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-between px-4 py-3 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100">
              <button
                type="button"
                className=" hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
                style={{ marginLeft: 10 }}
              >
                <Link to={`/photos/${photo.id}`}>View Details</Link>
              </button>
              <p className="text-lg font-bold text-white">{photo.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlbumDetails;
