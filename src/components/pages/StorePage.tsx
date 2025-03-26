import { ReactNode, useState } from "react";
import baitApi from "../../api/baitApi";
import storeApi from "../../api/storeApi";
import BaitImage from "../image/BaitImage";
import Container from "../Container";
import TextTooltip from "../tooltips/TextTooltip";
import RodUpgradeImage from "../image/RodUpgradeImage";

export default function StorePage(): ReactNode {
  return (
    <Container name="fishing store">
      <div className="p-4 pt-8 h-full">
        <div className="h-full bg-medium-beige rounded-4xl">
          <StoreSection title="bait licenses">
            {storeApi.getLicenseUpgrades().map((licenseUpgrade): ReactNode => {
              const { baitId, price } = licenseUpgrade
              const bait = baitApi.getBaitById(baitId)

              const tooltipTitle = `${bait.name} License`
              const tooltipDescription = `Unlocks the ${bait.name} bait type.`

              return (
                <StoreCard id={baitId} key={baitId} price={price}>
                  <BaitImage bait={bait} className="size-20" />
                  <TextTooltip
                    anchorSelect={`#${baitId}`}
                    title={tooltipTitle}
                    description={tooltipDescription}
                    cost={price}
                  />
                </StoreCard>
              )
            })}
          </StoreSection>

          <StoreSection title="upgrades">
            {storeApi.getRodUpgrades().map((rodUpgrade): ReactNode => {
              const [index, setIndex] = useState(0)
              const { id, name, description, costs, values } = rodUpgrade

              const tooltipTitle = `${name} ${index + 1}`
              const currentValue = values[index]
              const nextValue = values[index + 1] || null
              const tooltipDescription = nextValue ? `${description} from ${currentValue} > ${nextValue}` : `${description} to ${currentValue}`
              const price = costs[index]

              const handleIncrementIndex = () => {
                setIndex((oldIndex) => (oldIndex + 1) % values.length)
              }

              return (
                <StoreCard id={id} key={id} price={price} onClick={handleIncrementIndex} >
                  <RodUpgradeImage upgradeId={id} upgradeDescription={description} className="size-20" />
                  <TextTooltip
                    anchorSelect={`#${id}`}
                    title={tooltipTitle}
                    description={tooltipDescription}
                    cost={price}
                  />
                </StoreCard>
              )
            })}
          </StoreSection>
        </div>
      </div>
    </Container>
  )
}

interface StoreSectionProps {
  title: string,
  children: ReactNode,
}

function StoreSection({ title, children }: StoreSectionProps): ReactNode {
  return (
    <>
      <img className="m-auto" src="/img/ui/knot_separator.png" alt="section separator" />

      <div className="px-4 pb-4">
        <span className="text-light-beige">{title}</span>
        <div className="flex flex-wrap gap-3">
          {children}
        </div>
      </div>
    </>
  )
}

interface StoreCardProps {
  id: string,
  price: number,
  onClick?: () => void,
  children: ReactNode,
}

function StoreCard({ id, price, onClick, children }: StoreCardProps): ReactNode {
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