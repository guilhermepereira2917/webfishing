import { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";

interface CustomTooltipProps {
  anchorSelectId: string,
  children: ReactNode,
}

export default function CustomTooltip({ anchorSelectId, children }: CustomTooltipProps) {
  if (isMobile) {
    return null
  }

  return (
    <Tooltip anchorSelect={`#${anchorSelectId}`} place="bottom-start" float={true} opacity={1} offset={25} noArrow
      style={{
        backgroundColor: "var(--color-light-beige)",
        borderRadius: 20,
        zIndex: 1000,
        maxWidth: 460,
        transition: "none",
      }}
    >
      {children}
    </Tooltip>
  )
}