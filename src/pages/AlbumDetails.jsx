import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetails = () => {
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://photo-moto-zzzc.onrender.com/albums/${id}`)
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
              <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-blue-400 text-gray-900 focus:relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <Link to={`/photos/${photo.id}`}>View</Link>
              </button>
              {/* <button
                type="button"
                className=" hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
                style={{ marginLeft: 10 }}
              >
                <Link to={`/photos/${photo.id}`}>View Details</Link>
              </button> */}
              <p className="text-lg font-bold text-white">{photo.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlbumDetails;
