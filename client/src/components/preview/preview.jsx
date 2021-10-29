import React from "react";
import { useParams } from "react-router-dom";
export default function Preview() {
  const { id } = useParams();
  return <div>Preview {id}</div>;
}
