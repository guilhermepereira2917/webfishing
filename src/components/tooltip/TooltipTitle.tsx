import { ReactNode } from "react";

interface TooltipTitleProps {
  title: string,
}

export default function TooltipTitle({ title }: TooltipTitleProps): ReactNode {
  return (
    <>
      <span className="text-dark-beige-alternative">{title}</span> <br />
    </>
  )
}