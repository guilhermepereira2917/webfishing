import { ReactNode } from "react";

interface StoreCardProps {
  id: string,
  price: number,
  onClick?: () => void,
  children: ReactNode,
}

export default function StoreCard({ id, price, onClick, children }: StoreCardProps): ReactNode {
  return (
    <div
      id={id}
      className={`
        relative bg-light-beige p-2 rounded-3xl 
        hover:inset-ring-4 hover:inset-ring-medium-green
      `}
      onClick={onClick}
    >
      <div className="absolute -bottom-4 -right-3 bg-medium-green py-1 px-2 rounded-4xl pointer-events-none">
        <span className="text-light-beige">${price}</span>
      </div>

      {children}
    </div>
  )
}