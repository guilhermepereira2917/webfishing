import licenseUpgrades from "../data/store/licenses.json"
import rodUpgrades from "../data/store/rod.json"
import LicenseUpgrade from "../types/store/licenseUpgradeType"
import RodUpgrade from "../types/store/rodUpgradeType"


rodUpgrades.forEach(({ id, values, costs }: RodUpgrade) => {
  if (costs.length != values.length) {
    console.warn(`Rod Upgrade with id ${id} has different number of values ${values.length} and costs ${costs.length}`)
  }
})

const storeApi = {
  getLicenseUpgrades: (): LicenseUpgrade[] => {
    return licenseUpgrades
  },

  getRodUpgrades: (): RodUpgrade[] => {
    return rodUpgrades
  }
}

export default storeApi