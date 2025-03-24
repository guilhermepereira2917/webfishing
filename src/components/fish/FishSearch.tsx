import { ReactNode, useState } from "react";
import Quality, { allQualities, qualityColors } from "../../types/qualityEnum";

interface FishSearchProps {
  filter: string,
  setFilter: (value: string) => void,
}

export default function FishSearch({ filter, setFilter }: FishSearchProps): ReactNode {
  const [isFocused, setFocused] = useState(false)
  const hide = isFocused || filter

  const focusedWidths = [
    "w-[100%]",
    "w-[30px]",
    "w-[25px]",
    "w-[20px]",
    "w-[15px]",
  ]

  const unfocusedWidths = [
    "w-[100%]",
    "w-[95%]",
    "w-[72%]",
    "w-[40%]",
    "w-[30%]",
  ]

  const height = "h-[40px]"
  const qualities = [...allQualities]
  qualities.shift()

  return (
    <div className={`relative ${height} rounded-xl`}>

      <input
        type="text" placeholder="Click here to search"
        className={`absolute w-full text-light-beige p-1 ${hide ? "pl-10" : "pl-2"} transition-all z-10 focus:outline-none`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(event) => setFilter(event.target.value)}
      />

      {qualities.map((quality: Quality, index: number): ReactNode => {
        const width = hide ? focusedWidths[index] : unfocusedWidths[index]
        const backgroundColor = qualityColors.get(quality)

        return (
          <div key={quality} className={`absolute transition-all duration-300 ${width} ${height} ${backgroundColor} rounded-xl`} />
        )
      })}
    </div>
  )
}