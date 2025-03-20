import Quality from "./qualityEnum";

export default interface Bait {
  id: string,
  name: string,
  description: string,
  cost: number,
  maxTier: number,
  qualities: { quality: Quality | string, chance: number }[]
}

export function isBait(obj: any): obj is Bait {
  return obj && 'maxTier' in obj;
}