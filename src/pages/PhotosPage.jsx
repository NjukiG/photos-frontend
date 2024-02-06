import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import PhotoList from "../components/PhotoList";
import PhotosForm from "../components/PhotosForm";

const Photos = ({ publisherID }) => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(null);
  const [showPhotoForm, setShowPhotoForm] = useState(false);

  const fetchPhotos = () => {
    fetch("http://127.0.0.1:3000/albums")
      .then((response) => response.json())
      .then((data) => {
        const filteredAlbums = data.filter(
          (album) => album.publisher_id === publisherID
        );
        console.log(filteredAlbums[0].id);
        setAlbumId(filteredAlbums[0].id);
        const photosData = filteredAlbums.flatMap((album) => album.photos);
        console.log(photosData);
        setPhotos(photosData);
      })
      .catch((error) => console.error("Error fetching albums:", error));
  };

  useEffect(() => {
    fetchPhotos();
  }, [publisherID]);

  const handleAddPhoto = (newPhoto) => {
    const updatedPhotosArray = [newPhoto, ...photos];
    setPhotos(updatedPhotosArray);
    fetchPhotos();
  };

  const handleDeletePhoto = (id) => {
    setPhotos((photos) => {
      return photos.filter((photo) => photo.id !== id);
    });
    fetchPhotos();
  };

  const handleShowForm = () => {
    setShowPhotoForm((showPhotoForm) => !showPhotoForm);
  };

  const handleUpdatePhoto = (updatedPhoto) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === updatedPhoto.id ? updatedPhoto : photo
    );
  };

  return (
    <div className="container mx-auto px-4">
      {showPhotoForm ? (
        <PhotosForm
          albumId={albumId}
          onAddPhoto={handleAddPhoto}
          showPhotoForm={showPhotoForm}
        />
      ) : null}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleShowForm}
      >
        {showPhotoForm ? "Collapse Photo Form" : "Show Photo Form"}
      </button>
      <br />
      <br />
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
        {photos.length ? (
          <PhotoList
            photos={photos}
            albumId={albumId}
            onDeletePhoto={handleDeletePhoto}
            onUpdatePhoto = {handleUpdatePhoto}
          />
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              No Photos Found
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Seems like there are no photos in this album.
            </p>
            <p className="text-lg text-gray-600">
              Would you like to add a photo?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
