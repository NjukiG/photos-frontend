import React from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ publishers }) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Albums</h1>
        <ul>
          {publishers.map((publisher) => {
            if (publisher.email === user.email) {
              return (
                <li key={publisher.id} className="mb-4">
                  <h2 className="text-xl font-medium mb-2">{publisher.name}</h2>
                  <ul>
                    {publisher.albums.map((album) => (
                      <AlbumCard key={album.id} album={album} />
                    ))}
                  </ul>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default AlbumList;
