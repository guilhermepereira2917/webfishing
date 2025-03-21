import lures from "../data/lures/lures.json"
import Lure from "../types/lureType";

const lureApi = {
  getAllLures: (): Lure[] => {
    return lures
  },

  getLureById: (id: string): Lure => {
    const lureList = lureApi.getAllLures().filter((lure) => lure.id === id)
    if (lureList.length != 1) {
      throw new Error(`Lure with id ${id} not found`)
    }

    return lureList[0]
  }
}

export default lureApi;