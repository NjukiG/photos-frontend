import React from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums }) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Albums</h1>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album.id} className="mb-4">
                <h2 className="text-xl font-medium mb-2">{album.name}</h2>
                <ul>
                  <AlbumCard album={album} />
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AlbumList;
