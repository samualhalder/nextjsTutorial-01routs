import Link from "next/link";
import React from "react";

function F1() {
  return (
    <div>
      F1
      <Link href={"/f1/f2"}>to F2</Link>
    </div>
  );
}

export default F1;
