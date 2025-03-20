import Quality from "./qualityEnum";

export default interface Bait {
  id: string,
  name: string,
  description: string,
  cost: number,
  qualities: { quality: Quality | string, chance: number }[]
}