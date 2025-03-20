import lures from "../data/lures/lures.json"
import Lure from "../types/lureType";

const lureApi = {
  getAllLures: (): Lure[] => {
    return lures
  }
}

export default lureApi;