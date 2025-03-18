import freshWaterFish from "../assets/fish/freshwater.json";
import saltWaterFish from "../assets/fish/saltwater.json";
import rainFish from "../assets/fish/rain.json";
import voidFish from "../assets/fish/void.json";
import alienFish from "../assets/fish/alien.json";
import junkFish from "../assets/fish/junk.json";

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
  getAllFish: (): Fish[] => {
    return allFish
  },

  getAllFishByType(type: FishTypesEnum): Fish[] {
    switch (type) {
      case FishTypesEnum.FRESHWATER: return freshWaterFish
      case FishTypesEnum.SALTWATER: return saltWaterFish
      case FishTypesEnum.MISC: return miscFish
      default: return []
    }
  }
}

export default fishApi;