import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, onDeleteAlbum }) => {
  console.log(album);

  function deleteAlbum() {
    fetch(`http://127.0.0.1:3000/albums/${album.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteAlbum(album);
      }
    });
  }
  return (
    <article
    key={album.id}
    className="rounded-xl border-2 border-gray-100 bg-white"
  >
    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
      <a href="#" className="block shrink-0">
        <img
          alt="Speaker"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          className="h-14 w-14 rounded-lg object-cover"
        />
      </a>

      <div>
        <h3 className="font-medium sm:text-lg">
          <a href="/dashboard" className="hover:underline">
            {album.title} album.
          </a>
        </h3>

        <p className="line-clamp-2 text-sm text-gray-700">
          You have albums
          currently. Explore this album to view more of it content.
        </p>

        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
          <p className="hidden sm:block sm:text-xs sm:text-gray-500">
            Posted by
            <a
              href="/dashboard"
              className="font-medium underline hover:text-gray-700"
            >
              {album.title}
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        type="button"
        className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
        style={{ marginLeft: 10 }}
      >
        <Link to={`/albums/${album.id}`}>View Details</Link>
      </button>
    </div>
  </article>
  );
};

export default AlbumCard;






{/* <div className="container mx-auto">
<div className="bg-white shadow-md rounded-lg overflow-hidden">
  <div className="p-4">
    <h5 className="text-xl font-semibold mb-2">{album.title}</h5>
    <a
      href="/photos"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mr-4"
    >
      See Photos
    </a>

    <button
      onClick={deleteAlbum}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-block"
    >
      Delete
    </button>
  </div>
</div>
</div> */}
