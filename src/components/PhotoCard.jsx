import React from "react";

const PhotoCard = ({ photo }) => {
  const { id, title, image_url, album_id } = photo;

  return (
    <div className="col">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          alt=""
          src={photo?.image_url}
        />
        <div className="p-4">
          <h5 className="font-bold text-xl mb-2">{photo?.title}</h5>

          <div className="flex">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              style={{ marginLeft: 10 }}
            >
              View
            </button>

            <button
              // onClick={deletePhoto}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
