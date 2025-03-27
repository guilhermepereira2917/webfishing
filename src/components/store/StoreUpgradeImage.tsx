import { ReactNode } from "react";

interface StoreUpgradeImageProps {
  upgradeId: string,
  upgradeDescription: string,
  className?: string,
}

export default function StoreUpgradeImage({ upgradeId, upgradeDescription, className }: StoreUpgradeImageProps): ReactNode {
  return (
    <img src={`/img/upgrades/${upgradeId}.png`} alt={upgradeDescription} className={`${className || ""}`} />
  )
}