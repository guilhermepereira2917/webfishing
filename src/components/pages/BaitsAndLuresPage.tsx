import { ReactNode, useState } from "react";
import baitApi from "../../api/baitApi";
import Bait, { isBait } from "../../types/baitType";
import Container from "../Container";
import Quality, { qualityLabels, qualityTextColors } from "../../types/qualityEnum";
import Lure from "../../types/lureType";
import lureApi from "../../api/lureApi";
import LureImage from "../lure/LureImage";

export default function BaitsAndLuresPage(): ReactNode {
  const baits: Bait[] = baitApi.getAllBaits()
  const lures: Lure[] = lureApi.getAllLures()

  const [selectedBaitOrLure, setSelectedBaitOrLure] = useState<Bait | Lure | null>(null)
  const infoToRender = selectedBaitOrLure && (isBait(selectedBaitOrLure) ? BaitInfo(selectedBaitOrLure) : LureInfo(selectedBaitOrLure))

  return (
    <Container name="baits & lures">
      <div className="flex flex-col-reverse md:flex-row gap-4 h-full p-4 pt-8 text-3xl">
        <div className="flex-2 flex flex-col md:flex-row bg-medium-beige w-full rounded-4xl">
          <List title="Baits" classname="md:pr-0">
            {baits.map((bait: Bait): ReactNode => {
              const handleSelectBait = () => {
                setSelectedBaitOrLure(bait)
              }

              return (
                <ListItem key={bait.id} onClick={handleSelectBait} isSelected={bait === selectedBaitOrLure}>
                  <img src={`/img/baits/${bait.id}.png`} alt={bait.name} className="size-10" />
                  {bait.name}
                </ListItem>
              )
            })}
          </List>
          <List title="Lures">
            {lures.map((lure: Lure): ReactNode => {
              const handleSelectLure = () => {
                setSelectedBaitOrLure(lure)
              }

              return (
                <ListItem key={lure.id} onClick={handleSelectLure} isSelected={lure === selectedBaitOrLure}>
                  <LureImage lure={lure} className="size-10" />
                  {lure.name}
                </ListItem>
              )
            })}
          </List>
        </div>
        <div className="flex-1 p-4 bg-medium-beige w-full rounded-4xl">
          {infoToRender}
        </div>
      </div>
    </Container>
  )
}

function BaitInfo(bait: Bait): ReactNode {
  return (
    <>
      <p>
        <span className="text-dark-beige-alternative">{bait.name}</span> <br />
        {bait.description &&
          <>
            <span className="text-light-beige">{bait.description}</span> <br />
          </>
        }

        <span className="text-dark-beige">Cost: </span>
        <span className="text-light-beige">${bait.cost}</span> <br />

        <span className="text-dark-beige">Max Tier: </span>
        <span className="text-light-beige">{bait.maxTier}</span> <br />

        <br />
      </p>

      <ol>
        {bait.qualities.map((value): ReactNode => {
          const quality = value.quality
          const chance = value.chance

          if (chance == 0) {
            return null
          }

          const label = qualityLabels.get(quality as Quality)
          const textColor = qualityTextColors.get(quality as Quality)
          const formatedChance = (value.chance * 100).toFixed(2)

          return (
            <li key={quality}>
              <span className={textColor}>{label}: </span>
              <span className="text-light-beige">{formatedChance}%</span>
            </li>
          )
        })}
      </ol>
    </>
  )
}

function LureInfo(lure: Lure): ReactNode {
  return (
    <p>
      <span className="text-dark-beige-alternative">{lure.name}</span> <br />
      {lure.description &&
        <>
          <span className="text-light-beige">{lure.description}</span> <br />
        </>
      }
    </p>
  )
}

interface ListProps {
  title: string,
  children: ReactNode,
  classname?: string,
}

function List({ title, children, classname }: ListProps): ReactNode {
  return (
    <div className={`flex flex-col w-full p-4 ${classname}`}>
      <div className="pt-4 px-2 bg-light-beige w-5/6 text-light-green rounded-4xl rounded-b-none">{title}</div>
      <div className="flex flex-col grow min-h-0 bg-light-beige rounded-4xl rounded-tl-none">
        <ol className="p-2 pt-1 mt-2 h-[97%] max-h-full rounded-4xl overflow-y-auto no-scrollbar">
          {children}
        </ol>
      </div>
    </div>
  )
}

interface ListItemProps {
  onClick?: () => void,
  isSelected: boolean,
  children: ReactNode,
}

function ListItem({ isSelected, onClick, children }: ListItemProps): ReactNode {
  return (
    <li
      onClick={onClick}
      className={`
        flex p-1 items-center mb-1 rounded-xl
         ${isSelected ? "bg-dark-beige-alternative text-medium-beige" :
          "bg-light-green text-light-beige hover:bg-medium-yellow cursor-pointer active:bg-light-green active:text-medium-beige"
        }          
      `}
    >
      {children}
    </li>
  )
}