import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold mb-4">A list of all the photos.</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos &&
          photos.map((photo) => (
            <React.Fragment key={photo.id}>
              <PhotoCard photo={photo} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default PhotoList;
