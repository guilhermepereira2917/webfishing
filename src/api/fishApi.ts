import fishData from "../assets/fish/freshwater.json";
import Fish from "../types/fishType";

const fishApi = {
  getAllFish: (): Fish[] => {
    return fishData
  }
}

export default fishApi;