import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePhotoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newPhotoData, setNewPhotoData] = useState({
    id: id,
    title: "",
    image_url: "",
    album_id: "",
  });

  useEffect(() => {
    fetch("https://photo-moto-zzzc.onrender.com/photos/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated photo:", data);
        setNewPhotoData({
          ...newPhotoData,
          title: data.title,
          image_url: data.image_url,
          album_id: data.album_id,
        });
      })
      .catch((error) => {
        console.error("Error getting the photo:", error);
      });
  }, []);

  const handleUpdatePhoto = (e) => {
    e.preventDefault();

    fetch(`https://photo-moto-zzzc.onrender.com/photos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPhotoData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update photo");
        }
        console.log("Success");
        navigate("/photos");
      })
      .catch((error) => {
        console.error("Error updating photo:", error);
      });
  };
  return (
    <div className="albums-form bg-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">
        Enter your new Photo Details!
      </h1>
      <div className="container">
        <form onSubmit={handleUpdatePhoto}>
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
              value={newPhotoData.title}
              onChange={(e) => {
                setNewPhotoData({ ...newPhotoData, title: e.target.value });
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
              value={newPhotoData.image_url}
              onChange={(e) => {
                setNewPhotoData({ ...newPhotoData, title: e.target.value });
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
              //   placeholder={album_id}
              value={newPhotoData.album_id}
              onChange={(e) => {
                setNewPhotoData({ ...newPhotoData, title: e.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Update Photo
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePhotoForm;
