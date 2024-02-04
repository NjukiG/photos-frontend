import React, { useState } from "react";

const AlbumsForm = ({ onAddAlbum, publisherId }) => {
  const [title, setTitle] = useState("");
  const [publisher_id, setPublisher_id] = useState(publisherId);

  const handleAddAlbum = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, publisher_id: publisher_id }),
    })
      .then((res) => res.json())
      .then((newAlbum) => {
        console.log("Success:", newAlbum);
        onAddAlbum(newAlbum);
      });
  };
  return (
    <div className="albums-form bg-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">
        Enter your new Album name!
      </h1>
      <div className="container">
        <form onSubmit={handleAddAlbum}>
          <div className="mb-4">
            <label
              htmlFor="album"
              className="block text-sm font-medium text-gray-700"
            >
              Album Name:
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="title"
              id="title"
              placeholder="Album Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="publisher_id"
              className="block text-sm font-medium text-gray-700"
            >
              Publisher ID:
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="publisher_id"
              id="publisher_id"
              placeholder="Publisher ID"
              value={publisher_id}
              onChange={(e) => {
                setPublisher_id(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Album
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlbumsForm;
