import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumList from "../components/AlbumList";

const Albums = () => {
  const { user } = useAuth();

  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/publishers")
      .then((res) => res.json())
      .then((data) => {
        setPublishers(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-semibold mb-4">
        A list of all your albums.
      </h3>

      <AlbumList publishers={publishers} />
    </div>
  );
};

export default Albums;
