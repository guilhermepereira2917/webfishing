import { ReactNode } from "react";
import baitApi from "../../api/baitApi";
import storeApi from "../../api/storeApi";
import BaitImage from "../baits/BaitImage";
import Container from "../Container";
import TextTooltip from "../tooltips/TextTooltip";
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
              return <StoreIncrementalCard key={rodUpgrade.id} {...rodUpgrade} />
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
