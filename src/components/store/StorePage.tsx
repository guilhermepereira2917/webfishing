import { ReactNode } from "react";
import baitApi from "../../api/baitApi";
import lureApi from "../../api/lureApi";
import storeApi from "../../api/storeApi";
import BaitImage from "../baits/BaitImage";
import LureImage from "../baits/LureImage";
import Container from "../Container";
import CustomTooltip from "../tooltip/CustomTooltip";
import TooltipCost from "../tooltip/TooltipCost";
import TooltipText from "../tooltip/TooltipText";
import TooltipTitle from "../tooltip/TooltipTitle";
import StoreCard from "./StoreCard";
import StoreIncrementalCard from "./StoreIncrementalCard";
import StoreSection from "./StoreSection";

export default function StorePage(): ReactNode {
  return (
    <Container name="fishing store">
      <div className="p-4 pt-8 h-full">
        <div className="h-full bg-medium-beige rounded-4xl overflow-y-auto no-scrollbar">

          <StoreSection title="bait licenses">
            {storeApi.getLicenseUpgrades().map((licenseUpgrade): ReactNode => {
              const { baitId, price } = licenseUpgrade
              const bait = baitApi.getBaitById(baitId)

              const tooltipTitle = `${bait.name} License`
              const tooltipDescription = `Unlocks the ${bait.name} bait type.`

              return (
                <StoreCard id={baitId} key={baitId} price={price}>
                  <BaitImage bait={bait} className="size-20" />
                  <CustomTooltip anchorSelectId={baitId}>
                    <TooltipTitle title={tooltipTitle} />
                    <TooltipText text={tooltipDescription} />
                    <TooltipCost cost={price} />
                  </CustomTooltip>
                </StoreCard>
              )
            })}
          </StoreSection>

          <StoreSection title="upgrades">
            {storeApi.getRodUpgrades().map((rodUpgrade): ReactNode => {
              return <StoreIncrementalCard key={rodUpgrade.id} {...rodUpgrade} />
            })}
          </StoreSection>

          <StoreSection title="lures">
            {storeApi.getLureUpgrades().map((lureUpgrade): ReactNode => {
              const { lureId, price } = lureUpgrade
              const lure = lureApi.getLureById(lureId)

              const tooltipTitle = lure.name
              const firstTooltipDescription = `Unlocks the ${lure.name} lure:`
              const secondTooltipDescription = `${lure.description}`

              return (
                <StoreCard id={lureId} key={lureId} price={price}>
                  <LureImage lure={lure} className="size-20" />
                  <CustomTooltip anchorSelectId={lureId}>
                    <TooltipTitle title={tooltipTitle} />
                    <TooltipText text={firstTooltipDescription} /> <br />
                    <TooltipText text={secondTooltipDescription} />
                    <TooltipCost cost={price} />
                  </CustomTooltip>
                </StoreCard>
              )
            })}
          </StoreSection>

          <StoreSection title="fishing buddies">
            {storeApi.getBuddyUpgrades().map((buddyUpgrade): ReactNode => {
              return <StoreIncrementalCard key={buddyUpgrade.id} {...buddyUpgrade} />
            })}
          </StoreSection>
        </div>
      </div>
    </Container>
  )
}
