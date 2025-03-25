import Bait from "../types/baitType"
import baits from "../data/baits/baits.json"

const baitApi = {
  getAllBaits(): Bait[] {
    return baits
  },

  getBaitById: (id: string): Bait => {
    const baitList = baitApi.getAllBaits().filter((bait) => bait.id === id)
    if (baitList.length != 1) {
      throw new Error(`Bait with id ${id} not found`)
    }

    return baitList[0]
  }
}

export default baitApi