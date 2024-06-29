import React from "react";
import { photoArrey } from "../photo";
import Image from "next/image";
import "../../styles.css";

function Photo({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return (
    <div>
      {photoArrey.map((photo) =>
        photo.id == params.id ? (
          <div
            key={photo.id}
            className=" flex flex-col justify-center items-center"
          >
            <Image src={photo.src} alt={photo.name} className="h-500 w-400 " />
            <h1 className="text-red-600">{photo.name}</h1>
            <p>{photo.description}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Photo;
