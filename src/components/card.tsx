import React, { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default Card;
