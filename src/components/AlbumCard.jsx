import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, onDeleteAlbum, publisherId }) => {
  console.log(album);

  function deleteAlbum() {
    fetch(`https://photo-moto-zzzc.onrender.com/albums/${album.id}`, {
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
        <a href="/dashboard" className="block shrink-0">
          <img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="h-14 w-14 rounded-lg object-cover"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="/dashboard" className="hover:underline">
              {album.title}.
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            You have albums currently. Explore this album to view more of it
            content.
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
          onClick={deleteAlbum}
          className="inline-flex items-center gap-2 rounded-md hover:bg-red-500 px-4 py-2 text-sm text-red-500 hover:text-blue-900 font-bold shadow-sm focus:relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          Delete
        </button>

        <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm bg-gray-200 hover:bg-blue-500 text-gray-900 font-bold focus:relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Link to={`/albums/${album.id}`}>View</Link>
        </button>
        
      </div>
    </article>
  );
};

export default AlbumCard;
