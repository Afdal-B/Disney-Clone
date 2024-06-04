import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalGV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";

function ProductionHouses() {
  const productionHouses = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: marvel, video: marvelV },
    { id: 3, image: nationalG, video: nationalGV },
    { id: 4, image: pixar, video: pixarV },
    { id: 5, image: starwar, video: starwarV },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouses.map((item) => (
        <div className="border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black">
          <img src={item.image} className="w-full z-1"></img>
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          ></video>
        </div>
      ))}
    </div>
  );
}

export default ProductionHouses;
