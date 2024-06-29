import Link from "next/link";
import React from "react";

function Comments() {
  return (
    <div>
      Comments
      <Link href={"/complex-dashboard/deleted-comments"}>Deleted Comments</Link>
    </div>
  );
}

export default Comments;
