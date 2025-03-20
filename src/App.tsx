import { useState } from "react"
import JournalPage from "./components/pages/JournalPage"
import TabSelector from "./components/TabSelector"
import BaitsAndLuresPage from "./components/pages/BaitsAndLuresPage"

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const component = selectedTab == 0 ? <JournalPage /> : <BaitsAndLuresPage />

  return (
    <div className="text-2xl">
      <TabSelector setSelectedTab={setSelectedTab} />
      {component}
    </div>
  )
}

export default App
