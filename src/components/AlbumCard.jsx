import React from "react";

const AlbumCard = ({ album }) => {
  return (
    <div className="container mx-auto">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{album.title}</h5>
        <a href="/photos" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          See Photos
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default AlbumCard;
