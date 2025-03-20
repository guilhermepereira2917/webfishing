import { ReactNode, useState } from "react";
import baitApi from "../../api/baitApi";
import Bait from "../../types/baitType";
import Container from "../Container";
import Quality, { qualityLabels, qualityTextColors } from "../../types/qualityEnum";

export default function BaitsAndLuresPage(): ReactNode {
  const baits: Bait[] = baitApi.getAllBaits()
  const [selectedBait, setSelectedBait] = useState<Bait | null>(null)

  return (
    <Container name="baits & lures">
      <div className="flex gap-4 h-full p-4 pt-8 text-3xl">
        <div className="flex-2 flex bg-medium-beige w-full rounded-4xl">
          <List title="Baits">
            <ol className="h-max p-4 pl-2 bg-light-beige rounded-4xl rounded-tl-none">
              {baits.map((bait: Bait): ReactNode => {
                const handleSelectBait = () => {
                  setSelectedBait(bait)
                }

                return (
                  <li onClick={handleSelectBait} className="flex p-1 items-center mb-1 text-light-beige bg-light-green rounded-xl cursor-pointer">
                    <img src={`/img/baits/${bait.id}.png`} alt={bait.name} className="size-10" />
                    {bait.name}
                  </li>
                )
              })}
            </ol>
          </List>
        </div>
        <div className="flex-1 p-4 bg-medium-beige w-full rounded-4xl">
          {selectedBait &&
            <p>
              <span className="text-dark-beige-alternative">{selectedBait.name}</span> <br />
              {selectedBait.description &&
                <>
                  <span className="text-light-beige">{selectedBait.description}</span> <br />
                </>
              }

              <span className="text-dark-beige">Cost: </span>
              <span className="text-light-beige">${selectedBait.cost}</span> <br />

              <span className="text-dark-beige">Max Tier: </span>
              <span className="text-light-beige">{selectedBait.maxTier}</span> <br />

              <br />

              <ol>
                {selectedBait.qualities.map((value): ReactNode => {
                  const quality = value.quality
                  const chance = value.chance

                  if (chance == 0) {
                    return null
                  }

                  const label = qualityLabels.get(quality as Quality)
                  const textColor = qualityTextColors.get(quality as Quality)
                  const formatedChance = (value.chance * 100).toFixed(2)

                  return (
                    <li>
                      <span className={textColor}>{label}: </span>
                      <span className="text-light-beige">{formatedChance}%</span>
                    </li>
                  )
                })}
              </ol>
            </p>
          }
        </div>
      </div>
    </Container>
  )
}

interface ListProps {
  title: string,
  children: ReactNode,
}

function List({ title, children }: ListProps): ReactNode {
  return (
    <div className="w-full p-4">
      <div className="pt-4 px-2 bg-light-beige w-5/6 text-light-green rounded-4xl rounded-b-none">{title}</div>
      {children}
    </div>
  )
}