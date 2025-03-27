import { ReactNode } from "react";
import Lure from "../../types/lureType";

interface LureImageProps {
  lure: Lure,
  className?: string,
}

export default function LureImage({ lure, className }: LureImageProps): ReactNode {
  return (
    <img src={`/img/lures/${lure.id}.png`} alt={lure.name} className={`${className || ""}`} />
  )
}