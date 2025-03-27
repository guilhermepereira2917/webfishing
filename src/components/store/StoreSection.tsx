import { ReactNode } from "react";

interface StoreSectionProps {
  title: string,
  children: ReactNode,
}

export default function StoreSection({ title, children }: StoreSectionProps): ReactNode {
  return (
    <>
      <img className="m-auto object-none" src="/img/ui/knot_separator.png" alt="section separator" />

      <div className="px-4 pb-4">
        <span className="text-light-beige">{title}</span>
        <div className="flex flex-wrap gap-3">
          {children}
        </div>
      </div>
    </>
  )
}
