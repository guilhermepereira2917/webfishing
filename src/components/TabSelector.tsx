import { ReactNode } from "react";
import { NavLink } from "react-router";
import CustomTooltip from "./CustomTooltip";

interface Tab {
  id: string,
  title: string,
  description: string,
  href: string,
}

const tabs: Tab[] = [
  { id: 'journal', title: 'Journal', description: 'View all creatures', href: '/' },
  { id: 'baits', title: 'Baits & Lures', description: 'See all baits and lures', href: '/baits' },
]

export default function TabSelector(): ReactNode {
  return (
    <header className="flex items-center justify-center mt-8 p-4 gap-4">
      {tabs.map((tab: Tab): ReactNode => {
        return (
          <NavLink key={tab.id} to={tab.href}>
            {({ isActive }) => (
              <>
                <CustomTooltip anchorSelect={`#${tab.id}`} title={tab.title} description={tab.description} />

                <div id={tab.id}>
                  <img
                    src={`/img/tabs/${tab.id}.png`} alt={tab.title}
                    className={`
                      size-32 render-pixelated outline-4 outline-light-beige rounded-full
                      ${isActive ? "-translate-y-3" : "brightness-75 hover:brightness-[80%]"}
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