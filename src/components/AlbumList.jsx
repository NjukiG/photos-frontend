import React from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums, onDeleteAlbum }) => {
  const { user } = useAuth();
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Albums</h1>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album.id} className="mb-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                  <h2 className="text-xl font-medium mb-2">{album.title}</h2>
                  <ul>
                    <AlbumCard album={album} onDeleteAlbum={onDeleteAlbum} />
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AlbumList;
