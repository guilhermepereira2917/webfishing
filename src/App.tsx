import { useState } from "react"
import Journal from "./components/Journal"
import TabSelector from "./components/TabSelector"
import Baits from "./components/Baits"

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const component = selectedTab == 0 ? <Journal /> : <Baits />

  return (
    <div>
      <TabSelector setSelectedTab={setSelectedTab} />
      {component}
    </div>
  )
}

export default App
