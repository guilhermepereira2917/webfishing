import { ReactNode } from "react";
import CustomTooltip from "./CustomTooltip";

interface Tab {
  id: string,
  title: string,
  description: string,
}

const tabs: Tab[] = [
  { id: 'journal', title: 'Journal', description: 'View all creatures' },
  { id: 'baits', title: 'Baits & Lures', description: 'See all baits and lures' },
]

interface TabSelectorProps {
  setSelectedTab: (index: number) => void,
}

export default function TabSelector({ setSelectedTab }: TabSelectorProps): ReactNode {
  return (
    <ul className="flex items-center justify-center mt-8 p-4 gap-4">
      {tabs.map((tab: Tab, index: number): ReactNode => {

        const handleChangeTab = () => {
          setSelectedTab(index)
        }

        return (
          <>
            <CustomTooltip anchorSelect={`#${tab.id}`} title={tab.title} description={tab.description} />

            <li id={tab.id} onClick={handleChangeTab} className="cursor-pointer brightness-75 hover:brightness-[80%]">
              <img src={`/img/tabs/${tab.id}.png`} alt={tab.title} className="size-32 render-pixelated outline-4 outline-light-beige rounded-full" />
            </li>
          </>
        )
      })}
    </ul>
  )
}