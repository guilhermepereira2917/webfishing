import { ReactNode } from "react";

interface TooltipCostProps {
  cost: number,
}

export default function TooltipCost({ cost }: TooltipCostProps): ReactNode {
  return (
    <>
      {cost && <span className="text-light-green">Costs ${cost}</span>}
    </>
  )
}