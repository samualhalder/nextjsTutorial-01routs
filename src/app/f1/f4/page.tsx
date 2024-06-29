import Link from "next/link";
import React from "react";

function F4() {
  return (
    <div>
      F4
      <Link href={"/f1/f3"}>to F3</Link>
      <Link href={"/about"}>TO about</Link>
    </div>
  );
}

export default F4;
