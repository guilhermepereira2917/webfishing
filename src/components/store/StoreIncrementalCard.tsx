import { ReactNode, useState } from "react";
import IncrementalUpgrade from "../../types/store/incrementalUpgradeType";
import CustomTooltip from "../tooltip/CustomTooltip";
import TooltipCost from "../tooltip/TooltipCost";
import TooltipText from "../tooltip/TooltipText";
import TooltipTitle from "../tooltip/TooltipTitle";
import IncrementalUpgradeImage from "./IncrementalUpgradeImage";
import StoreCard from "./StoreCard";

type StoreIncrementalCardProps = IncrementalUpgrade

export default function StoreIncrementalCard({ id, name, description, costs, values }: StoreIncrementalCardProps): ReactNode {
  const [index, setIndex] = useState(0)

  const tooltipTitle = `${name} ${index + 1}`
  const currentValue = values[index]
  const nextValue = values[index + 1] || null
  const tooltipDescription = nextValue ? `${description} from ${currentValue} > ${nextValue}` : `${description} to ${currentValue}`
  const price = costs[index]

  const handleIncrementIndex = () => {
    setIndex((oldIndex) => (oldIndex + 1) % values.length)
  }

  return (
    <StoreCard id={id} price={price} onClick={handleIncrementIndex} >
      <IncrementalUpgradeImage upgradeId={id} upgradeDescription={description} className="size-20" />
      <CustomTooltip anchorSelectId={id}>
        <TooltipTitle title={tooltipTitle} />
        <TooltipText text={tooltipDescription} />
        <TooltipCost cost={price} />
      </CustomTooltip>
    </StoreCard>
  )
}