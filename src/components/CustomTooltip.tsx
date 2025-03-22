import { Tooltip } from "react-tooltip";

interface CustomTooltipProps {
  anchorSelect: string,
  title: string,
  description: string,
}

export default function CustomTooltip({ anchorSelect, title, description }: CustomTooltipProps) {
  return (
    <Tooltip anchorSelect={anchorSelect} place="bottom-start" float={true} opacity={1} noArrow offset={20} style={{
      backgroundColor: "var(--color-light-beige)",
      borderRadius: 20,
      zIndex: 1000,
      transition: "none",
    }}>
      <p>
        <span className="text-dark-beige-alternative">{title}</span> <br />
        <span className="text-medium-beige">{description}</span>
      </p>
    </Tooltip>
  )
}