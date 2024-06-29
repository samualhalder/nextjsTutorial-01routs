import React from "react";

import Image from "next/image";
import "@/app/styles.css";
import { photoArrey } from "@/app/photo-feed/photo";
import Modal from "@/components/Modal";

function PhotoModal({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return (
    <Modal>
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
    </Modal>
  );
}

export default PhotoModal;
