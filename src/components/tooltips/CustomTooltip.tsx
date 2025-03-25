import { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";

interface CustomTooltipProps {
  anchorSelect: string,
  children: ReactNode,
}

export default function CustomTooltip({ anchorSelect, children }: CustomTooltipProps) {
  if (isMobile) {
    return null
  }

  return (
    <Tooltip anchorSelect={anchorSelect} place="bottom-start" float={true} opacity={1} offset={25} noArrow
      style={{
        backgroundColor: "var(--color-light-beige)",
        borderRadius: 20,
        zIndex: 1000,
        transition: "none",
      }}
    >
      {children}
    </Tooltip>
  )
}