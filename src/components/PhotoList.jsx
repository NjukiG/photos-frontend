import React from "react";
import PhotoCard from "./PhotoCard";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const PhotoList = ({ photos, albumId, onDeletePhoto, onUpdatePhoto }) => {
  const { user } = useAuth();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <h2>{user.name}, these are your photos</h2>

      {photos &&
        photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            albumId={albumId}
            onDeletePhoto={onDeletePhoto}
            onUpdatePhoto={onUpdatePhoto}
          />
        ))}
    </div>
  );
};

export default PhotoList;
