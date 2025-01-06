import { useContext } from "react";
import { colorContext } from "./context";

export default function SmallChild() {
  const color = useContext(colorContext);

  return <p style={{ color: color }}>Color:{color}</p>;
}
