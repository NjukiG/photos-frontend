import React, { useState } from "react";

const PhotosForm = ({ albumId, onAddPhoto, showPhotoForm }) => {
  const [title, setTitle] = useState("");
  const [image_url, setImageURL] = useState("");
  const [album_id, setAlbumID] = useState(albumId);

  const handleAddPhoto = (e) => {
    e.preventDefault();
    fetch(`https://photo-moto-zzzc.onrender.com/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image_url: image_url,
        album_id: album_id,
      }),
    })
      .then((res) => res.json())
      .then((newPhoto) => {
        console.log("Success:", newPhoto);
        onAddPhoto(newPhoto);
      });
  };
  return (
    <div className="albums-form bg-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">
        Enter your new Photo Details!
      </h1>
      <div className="container">
        <form onSubmit={handleAddPhoto}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Photo Name:
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="title"
              id="title"
              placeholder="Photo Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image_url"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL:
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="image_url"
              id="image_url"
              placeholder="Photo image URL"
              value={image_url}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="album_id"
              className="block text-sm font-medium text-gray-700"
            >
              Album ID:
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="album_id"
              id="album_id"
              placeholder={album_id}
              value={album_id}
              onChange={(e) => {
                setAlbumID(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Photo
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhotosForm;
