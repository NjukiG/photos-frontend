import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumList from "../components/AlbumList";
import AlbumsForm from "../components/AlbumsForm";

const Albums = () => {
  const { user } = useAuth();

  const [albums, setAlbums] = useState([]);
  const [publisherId, setPublisherId] = useState(null);
  const [showAlbumsForm, setShowAlbumsForm] = useState(false);

  const fetchAlbums = () => {
    fetch("http://127.0.0.1:3000/publishers")
      .then((response) => response.json())
      .then((data) => {
        const filteredPublishers = data.filter(
          (publisher) => publisher.email === user.email
        );
        console.log(filteredPublishers[0].id);
        setPublisherId(filteredPublishers[0].id);
        const albumsData = filteredPublishers.flatMap(
          (publisher) => publisher.albums
        );
        console.log(albumsData);
        setAlbums(albumsData);
      })
      .catch((error) => console.error("Error fetching albums:", error));
  };

  useEffect(() => {
    fetchAlbums();
  }, [user]);

  const handleAddAlbum = (newAlbum) => {
    const updatedAlbumsArray = [newAlbum, ...albums];
    setAlbums(updatedAlbumsArray);
    fetchAlbums();
  };

  const handleDeleteAlbum = (id) => {
    setAlbums((albums) => {
      return albums.filter((album) => album.id !== id);
    });
    fetchAlbums();
  };

  const handleShowAlbumForm = () => {
    setShowAlbumsForm((showAlbumsForm) => !showAlbumsForm);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showAlbumsForm ? (
        <AlbumsForm publisherId={publisherId} onAddAlbum={handleAddAlbum} />
      ) : null}
      <button
        className={`border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          showAlbumsForm ? "bg-blue-500 text-white" : ""
        }`}
        onClick={handleShowAlbumForm}
      >
        {showAlbumsForm ? "Collapse Album Form" : "Show Album Form"}
      </button>

      <br />
      <br />
      <h3 className="text-3xl font-semibold mb-4">
        A list of all your albums.
      </h3>

      {albums.length ? (
        <AlbumList
          albums={albums}
          onDeleteAlbum={handleDeleteAlbum}
          publisherId={publisherId}
        />
      ) : (
        <div>
          <h1>Sorry, you don't have any albums now.</h1>
          <h2>Would you like to add an album?</h2>
        </div>
      )}
    </div>
  );
};

export default Albums;
