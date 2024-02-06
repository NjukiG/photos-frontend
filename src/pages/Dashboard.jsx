import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImageUrl = images[randomIndex];

  const [publishers, setPublishers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedPublisherId, setSelectedPublisherId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/publishers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPublishers(data);
      })
      .catch((error) => console.error("Error fetching publishers:", error));
  }, []);

  // Function to fetch albums by publisher ID
  const fetchAlbumsByPublisher = (id) => {
    fetch(`http://127.0.0.1:3000/publishers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.albums);
        setAlbums(data);
      })
      .catch((error) =>
        console.error(`Error fetching albums for publisher ${id}:`, error)
      );
  };

  // Function to handle clicking on "Show Albums" button
  const handleShowAlbums = (publisherId) => {
    setSelectedPublisherId(publisherId);
    fetchAlbumsByPublisher(publisherId);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="bg-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, {user.name}!
              </h1>

              <p className="mt-1.5 text-sm text-gray-600">
                Explore the albums and photos of publishers just like you! 🎉
              </p>
              <p className="mt-1.5 text-sm text-gray-600">
                Select details of publishers that interest you!
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                to="/albums"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> Add an Album </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>

              <Link
                to="/photos"
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Add a Photo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <ul role="list" className="divide-y divide-gray-100">
        {publishers.map((publisher) => (
          <li
            key={publisher.email}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={randomImageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {publisher.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {publisher.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <a
                className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                href={`/publishers/${publisher.id}`}
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
                  
                  View Albums
                </span>
              </a>
              {/* HGJB */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

{
  /* <button
type="button"
className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
style={{ marginLeft: 10 }}
>
<Link to={`/publishers/${publisher.id}`}>View Details</Link>
</button> */
}
