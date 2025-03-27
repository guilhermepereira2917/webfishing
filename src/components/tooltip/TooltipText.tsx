import { ReactNode } from "react";

interface TooltipTextProps {
  text: string,
}

export default function TooltipText({ text }: TooltipTextProps): ReactNode {
  return (
    <>
      <span className="text-medium-beige">{text}</span> <br />
    </>
  )
}