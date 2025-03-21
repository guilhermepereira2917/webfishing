export default interface Fish {
  id: string,
  name: string,
  description: string,
  catchBlurb: string,
  tier: number,
  sellValue: number,
  averageSize: number,
  textureName: string,
  catchChances: CatchChance[],
}

export interface CatchChance {
  lureId: string,
  chance: number,
}