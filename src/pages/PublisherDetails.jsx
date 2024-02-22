// PublisherDetails.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PublisherDetails = ({ match }) => {
  const [publisher, setPublisher] = useState(null);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://photo-moto-zzzc.onrender.com/publishers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPublisher(data);
        setAlbums(data.albums);
      })
      .catch((error) => console.error("Error fetching publisher:", error));
  }, []);

  if (!publisher) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <header className="bg-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="mt-1.5 text-2xl text-gray-800">
                Explore the albums and photos by {publisher.name}! 🎉
              </p>
              <p className="mt-1.5 text-2xl text-gray-800">
                Currently has {publisher.albums.length} album. Select one that
                interests you!
              </p>
            </div>
          </div>
        </div>
      </header>

      <ul>
        {albums &&
          albums.map((album) => (
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
                      {publisher.name}'s {album.title} album.
                    </a>
                  </h3>

                  <p className="line-clamp-2 text-sm text-gray-700">
                    Explore this albums to view more of it content.
                  </p>

                  <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                    <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                      Posted by
                      <a
                        href="/dashboard"
                        className="font-medium underline hover:text-gray-700"
                      >
                        {publisher.name} {album.id}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href={`/albums/${publisher.id}`}
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Explore Photos
                  </span>
                </a>
              </div>
            </article>
          ))}
      </ul>
    </div>
  );
};

export default PublisherDetails;
