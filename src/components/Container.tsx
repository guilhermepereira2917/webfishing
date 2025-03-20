import { ReactNode } from "react";

interface ContainerProps {
  name: string,
  children?: ReactNode,
}

export default function Container({ name, children }: ContainerProps): ReactNode {
  return (
    <section className="relative w-[1140px] h-[640px] bg-light-beige rounded-4xl">
      <div className="absolute -rotate-3 -translate-1/2 bg-light-green text-xl text-light-beige py-3 px-12 rounded-4xl">
        {name}
      </div>

      {children}
    </section>
  )
}