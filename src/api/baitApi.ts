import Bait from "../types/baitType"
import baits from "../data/baits/baits.json"

const baitApi = {
  getAllBaits(): Bait[] {
    return baits
  }
}

export default baitApi