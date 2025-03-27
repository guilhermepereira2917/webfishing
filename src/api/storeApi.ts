import buddyUpgrades from "../data/store/buddy.json"
import licenseUpgrades from "../data/store/licenses.json"
import lureUpgrades from "../data/store/lures.json"
import rodUpgrades from "../data/store/rod.json"
import IncrementalUpgrade from "../types/store/incrementalUpgradeType"
import LicenseUpgrade from "../types/store/licenseUpgradeType"
import LureUpgrade from "../types/store/lureUpgradeType"


rodUpgrades.forEach(({ id, values, costs }: IncrementalUpgrade) => {
  if (costs.length != values.length) {
    console.warn(`Rod Upgrade with id ${id} has different number of values ${values.length} and costs ${costs.length}`)
  }
})

const storeApi = {
  getLicenseUpgrades: (): LicenseUpgrade[] => {
    return licenseUpgrades
  },

  getRodUpgrades: (): IncrementalUpgrade[] => {
    return rodUpgrades
  },

  getLureUpgrades: (): LureUpgrade[] => {
    return lureUpgrades
  },

  getBuddyUpgrades: (): IncrementalUpgrade[] => {
    return buddyUpgrades
  },
}

export default storeApi