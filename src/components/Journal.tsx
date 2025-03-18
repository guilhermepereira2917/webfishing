import { ReactNode, useEffect, useState } from "react";
import FishTypesEnum from "../types/fishTypes";
import fishApi from "../api/fishApi";
import Fish from "../types/fishType";

export default function Journal(): ReactNode {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [fishList, setFishList] = useState<Fish[]>(fishApi.getAllFish())
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null)

  useEffect(() => {
    const fishType = Object.values(FishTypesEnum)[selectedTabIndex] as FishTypesEnum
    const fish = fishApi.getAllFishByType(fishType)
    setFishList(fish)
  }, [selectedTabIndex])

  return (
    <main className="relative w-[1140px] h-[640px] bg-light-beige rounded-4xl">
      <div className="absolute -rotate-3 -translate-1/2 bg-light-green text-xl text-light-beige py-3 px-12 rounded-4xl">
        journal
      </div>

      <div className="flex w-full h-full gap-4 p-4 pt-8">
        <div className="flex flex-col gap-4 w-4/6">
          <div className="flex w-full items-start justify-evenly gap-2">
            {Object.keys(FishTypesEnum).filter((type) => isNaN(parseInt(type))).map((type, index) => {
              const isSelected = index == selectedTabIndex
              const style = isSelected ? "bg-light-green text-light-beige" : "bg-dark-green text-greyed-out-beige"

              const handleClick = () => {
                setSelectedTabIndex(index)
              }

              return (
                <button onClick={handleClick} key={type} className={`${style} w-full text-center px-2 text-2xl rounded-xl cursor-pointer`}>
                  {type}
                </button>
              )
            })}
          </div>

          <div className="bg-dark-beige w-full h-full rounded-4xl overflow-y-scroll no-scrollbar">
            <div className="flex flex-wrap gap-1 w-full p-4">
              {fishList.map((fish: Fish): ReactNode => {

                const handleClick = () => {
                  setSelectedFish(fish)
                }

                return (
                  <button
                    onClick={handleClick}
                    key={fish.id}
                    className="flex items-center justify-center w-[165px] h-[90px] bg-light-beige rounded-4xl cursor-pointer"
                  >
                    <img src={`/img/fish/${fish.id}.png`} className="h-full" alt={fish.description} />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/6 h-full">
          <div className="flex items-center justify-center w-full h-3/5 bg-dark-beige rounded-4xl">
            {selectedFish && (
              <img className="rotate-animation" src={`/img/fish/${selectedFish.id}.png`} alt={selectedFish.description} />
            )}
          </div>

          <div className="w-full h-2/5 p-4 bg-dark-beige rounded-4xl">
            {selectedFish && (
              <p className="text-2xl text-wrap break-words">
                <span>{selectedFish.name}</span> <br />
                <span className="text-medium-beige">{selectedFish.description}</span> <br />
                <span className="text-light-beige">{selectedFish.catchBlurb}</span> <br />
                <span className="text-medium-beige">Tier: </span>
                <span className="text-light-beige">{selectedFish.tier + 1}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}