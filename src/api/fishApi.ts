import freshWaterFish from "../data/fishes/freshwater.json";
import saltWaterFish from "../data/fishes/saltwater.json";
import rainFish from "../data/fishes/rain.json";
import voidFish from "../data/fishes/void.json";
import alienFish from "../data/fishes/alien.json";
import junkFish from "../data/fishes/junk.json";

import Fish from "../types/fishType";
import FishTypesEnum from "../types/fishTypes";

const allFish = [
  freshWaterFish,
  saltWaterFish,
  rainFish,
  voidFish,
  alienFish,
  junkFish,
].flat()

const miscFish = [
  rainFish,
  junkFish,
  alienFish,  
  voidFish,
].flat()

const fishApi = {
  getAllFishes: (): Fish[] => {
    return allFish
  },

  getFishesByType(type: FishTypesEnum): Fish[] {
    switch (type) {
      case FishTypesEnum.FRESHWATER: return freshWaterFish
      case FishTypesEnum.SALTWATER: return saltWaterFish
      case FishTypesEnum.MISC: return miscFish
      default: return []
    }
  }
}

export default fishApi;