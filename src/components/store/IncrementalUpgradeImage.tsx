import { ReactNode } from "react";

interface RodUpgradeImageProps {
  upgradeId: string,
  upgradeDescription: string,
  className?: string,
}

export default function IncrementalUpgradeImage({ upgradeId, upgradeDescription, className }: RodUpgradeImageProps): ReactNode {
  return (
    <img src={`/img/upgrades/${upgradeId}.png`} alt={upgradeDescription} className={`${className || ""}`} />
  )
}