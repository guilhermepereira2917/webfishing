import licenseUpgrades from "../data/store/licenses.json"
import LicenseUpgrade from "../types/store/licenseUpgradeType"

const storeApi = {
  getLicenseUpgrades: (): LicenseUpgrade[] => {
    return licenseUpgrades
  }
}

export default storeApi