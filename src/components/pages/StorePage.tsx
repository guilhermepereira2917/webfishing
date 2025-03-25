import { ReactNode } from "react";
import baitApi from "../../api/baitApi";
import storeApi from "../../api/storeApi";
import BaitImage from "../bait/BaitImage";
import Container from "../Container";
import TextTooltip from "../tooltips/TextTooltip";

export default function StorePage(): ReactNode {
  return (
    <Container name="fishing store">
      <div className="p-4 pt-8 h-full">
        <div className="h-full bg-medium-beige rounded-4xl">
          <img className="m-auto" src="/img/ui/knot_separator.png" alt="section separator" />

          <div className="px-4">
            <span className="text-light-beige">bait licenses</span>
            <div className="flex flex-wrap gap-3">
              {storeApi.getLicenseUpgrades().map((licenseUpgrade): ReactNode => {
                const { baitId, price } = licenseUpgrade
                const bait = baitApi.getBaitById(baitId)

                const tooltipTitle = `${bait.name} License`
                const tooltipDescription = `Unlocks the ${bait.name} bait type.`

                return (
                  <div
                    key={baitId} id={baitId}
                    className={`
                      relative bg-light-beige p-2 rounded-3xl 
                      hover:inset-ring-4 hover:inset-ring-medium-green`
                    }
                  >
                    <BaitImage bait={bait} className="size-20" />
                    <div className="absolute -bottom-4 -right-3 bg-medium-green py-1 px-2 rounded-4xl pointer-events-none">
                      <span className="text-light-beige">${price}</span>
                    </div>

                    <TextTooltip
                      anchorSelect={`#${baitId}`}
                      title={tooltipTitle}
                      description={tooltipDescription}
                      cost={price}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}