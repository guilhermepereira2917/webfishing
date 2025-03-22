import { ReactNode, useEffect, useState } from "react";
import fishApi from "../../api/fishApi";
import lureApi from "../../api/lureApi";
import Fish, { CatchChance } from "../../types/fishType";
import FishTypesEnum from "../../types/fishTypes";
import Container from "../Container";
import CustomTooltip from "../CustomTooltip";
import LureImage from "../lure/LureImage";

export default function JournalPage(): ReactNode {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [fishList, setFishList] = useState<Fish[]>(fishApi.getAllFishes())
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null)

  useEffect(() => {
    const fishType = Object.values(FishTypesEnum)[selectedTabIndex] as FishTypesEnum
    const fish = fishApi.getFishesByType(fishType)
    setFishList(fish)
  }, [selectedTabIndex])

  return (
    <Container name="journal">
      <div className="flex w-full h-full gap-4 p-4 pt-8">
        <div className="flex flex-col gap-4 w-4/6">
          <div className="flex w-full items-start justify-evenly gap-2">
            {Object.keys(FishTypesEnum).filter((type) => isNaN(parseInt(type))).map((type, index) => {
              const isSelected = index == selectedTabIndex
              const style = isSelected ? "bg-light-green text-light-beige hover:bg-medium-yellow" : "bg-dark-green text-greyed-out-beige hover:bg-dark-yellow"

              const handleClick = () => {
                setSelectedTabIndex(index)
              }

              return (
                <button onClick={handleClick} key={type} className={`${style} w-full text-center px-2 rounded-xl cursor-pointer`}>
                  {type}
                </button>
              )
            })}
          </div>

          <div className="bg-medium-beige w-full h-full rounded-4xl overflow-y-scroll no-scrollbar">
            <div className="flex flex-wrap gap-1 w-full p-4">
              {fishList.map((fish: Fish): ReactNode => {

                const handleClick = () => {
                  setSelectedFish(fish)
                }

                return (
                  <>
                    <CustomTooltip anchorSelect={`#${fish.id}`} title={fish.name} description={fish.description} />

                    <button
                      id={fish.id}
                      key={fish.id}
                      onClick={handleClick}
                      className="flex items-center justify-center w-[165px] h-[90px] bg-light-beige rounded-4xl cursor-pointer"
                    >
                      <img src={`/img/fishes/${fish.textureName}`} className="h-full" alt={fish.description} />
                    </button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/6 h-full">
          <div className="flex items-center justify-center w-full h-3/5 bg-medium-beige rounded-4xl">
            {selectedFish && (
              <img className="rotate-animation" src={`/img/fishes/${selectedFish.textureName}`} alt={selectedFish.description} />
            )}
          </div>

          <div className="w-full h-2/5 p-4 bg-medium-beige rounded-4xl overflow-y-scroll no-scrollbar">
            {selectedFish && (
              <p className="text-wrap break-words">
                <span className="text-dark-beige-alternative">{selectedFish.name}</span> <br />
                <span className="text-light-beige-alternative">{selectedFish.description}</span> <br />
                <span className="text-light-beige">{selectedFish.catchBlurb}</span> <br />

                <span className="text-dark-beige-alternative">Tier: </span>
                <span className="text-light-beige">{selectedFish.tier + 1}</span> <br />

                <br />

                {selectedFish.catchChances
                  .sort((a, b) => b.chance - a.chance)
                  .map(({ lureId, chance }: CatchChance): ReactNode => {
                    const lure = lureApi.getLureById(lureId)
                    const formatedChance = chance.toFixed(2) + "%"

                    return (
                      <>
                        <span className="text-dark-beige-alternative">{`${lure.name}: `}</span>
                        <span className="text-light-beige">{formatedChance}</span>
                        <LureImage lure={lure} className="inline-flex size-8" /> <br />
                      </>
                    )
                  })}
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}