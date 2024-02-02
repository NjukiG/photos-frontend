import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumList from "../components/AlbumList";

const Albums = () => {
  const { user } = useAuth();

  const [albums, setAlbums] = useState([]);
  const [showAlbumsForm, setShowAlbumsForm] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);

  const handleAddAlbum = (newAlbum) => {
    const updatedAlbumsArray = [newAlbum, ...albums];
    setAlbums(updatedAlbumsArray);
  };

  const handleShowAlbumForm = () => {
    setShowAlbumsForm((showAlbumsForm) => !showAlbumsForm);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-semibold mb-4">
        A list of all your albums.
      </h3>

      <AlbumList albums={albums} />
    </div>
  );
};

export default Albums;
