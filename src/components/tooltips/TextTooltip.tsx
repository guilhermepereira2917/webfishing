import { ReactNode } from "react";
import CustomTooltip from "./CustomTooltip";

interface TextTooltipProps {
  anchorSelect: string,
  title: string,
  description: string,
  cost?: number,
}

export default function TextTooltip({ anchorSelect, title, description, cost }: TextTooltipProps): ReactNode {
  return (
    <CustomTooltip anchorSelect={anchorSelect}>
      <p>
        <span className="text-dark-beige-alternative">{title}</span> <br />
        <span className="text-medium-beige">{description}</span> <br />
        {cost && <span className="text-light-green">Costs ${cost}</span>}
      </p>
    </CustomTooltip>
  )
}