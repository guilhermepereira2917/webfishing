import { ReactNode } from "react";
import Bait from "../../types/baitType";

interface BaitImageProps {
  bait: Bait,
  className?: string,
}

export default function BaitImage({ bait, className }: BaitImageProps): ReactNode {
  return (
    <img src={`/img/baits/${bait.id}.png`} alt={bait.name} className={`${className || ""}`} />
  )
}