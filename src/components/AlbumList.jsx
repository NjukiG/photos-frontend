import React from "react";
import { useAuth } from "../utils/AuthContext";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums, onDeleteAlbum, publisherId}) => {
  const { user } = useAuth();
  return (
    <div className="container mx-auto">
      <div>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album.id} className="mb-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                  {/* <h2 className="text-xl font-medium mb-2">{album.title}</h2> */}
                  <ul>
                    <AlbumCard album={album} onDeleteAlbum={onDeleteAlbum} publisherId={publisherId} />
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
