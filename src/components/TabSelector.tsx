import { ReactNode } from "react";
import { NavLink } from "react-router";
import CustomTooltip from "./tooltip/CustomTooltip";
import TooltipText from "./tooltip/TooltipText";
import TooltipTitle from "./tooltip/TooltipTitle";

interface Tab {
  id: string,
  title: string,
  description: string,
  href: string,
}

const tabs: Tab[] = [
  { id: 'journal', title: 'Journal', description: 'View all creatures', href: '/' },
  { id: 'baits', title: 'Baits & Lures', description: 'See all baits and lures', href: '/baits' },
  { id: 'store', title: 'Store', description: 'See all things you can buy on the store', href: '/store' },
]

export default function TabSelector(): ReactNode {
  return (
    <header className="flex items-center justify-center mt-8 p-4 gap-4">
      {tabs.map((tab: Tab): ReactNode => {
        return (
          <NavLink key={tab.id} to={tab.href}>
            {({ isActive }) => (
              <>
                <CustomTooltip anchorSelectId={tab.id}>
                  <TooltipTitle title={tab.title} />
                  <TooltipText text={tab.description} />
                </CustomTooltip>

                <div id={tab.id}>
                  <img
                    src={`/img/tabs/${tab.id}.png`} alt={tab.title}
                    className={`
                      size-20 xs:size-24 sm:size-32 render-pixelated rounded-full
                      ${isActive ? "-translate-y-3 outline-4 outline-light-beige" : "brightness-75 hover:brightness-[80%]"}
                    `}
                  />
                </div>
              </>
            )}
          </NavLink>
        )
      })}
    </header>
  )
}