import React from "react";
import { photoArrey } from "./photo";
import { emit } from "process";
import Image from "next/image";
import Link from "next/link";

function PhotoFeed() {
  return (
    <div>
      {photoArrey.map((elm) => (
        <Link href={`/photo-feed/${elm.id}`} key={elm.id}>
          <div>
            <Image src={elm.src} alt={elm.description} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PhotoFeed;
