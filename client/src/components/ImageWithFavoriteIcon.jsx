import React from "react";
import { MdOutlineFavorite } from "react-icons/md";
const ImageWithFavoriteIcon = ({ imageUrl, onClick, isfavorite }) => {

  // console.log(isfavorite);
  return (
    <div className="relative h-[400px] w-[400px] flex-shrink-0">
      <img src={imageUrl} alt="Image" className="w-full h-full object-cover" />
      <div className="absolute top-0 right-0 p-2">
        {isfavorite ? (
          <MdOutlineFavorite
            className="text-red-500 w-12 h-12"
            onClick={onClick}
          />
        ) : (
          <MdOutlineFavorite
            className="text-white w-12 h-12"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithFavoriteIcon;
