import { ReactNode } from "react";

interface TabSelectorProps {
  setSelectedTab: (index: number) => void,
}

const tabs: string[] = [
  'journal',
  'baits',
]

export default function TabSelector({ setSelectedTab }: TabSelectorProps): ReactNode {
  return (
    <ul className="flex items-center justify-center mt-8 p-4 gap-4">
      {tabs.map((tab: string, index: number): ReactNode => {

        const handleChangeTab = () => {
          setSelectedTab(index)
        }

        return (
          <li onClick={handleChangeTab} className="cursor-pointer brightness-75 hover:brightness-[80%]">
            <img src={`/img/tabs/${tab}.png`} alt={tab} className="size-32 render-pixelated outline-4 outline-light-beige rounded-full"/>
          </li>
        )
      })}
    </ul>
  )
}