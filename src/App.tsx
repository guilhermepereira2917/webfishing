import { Outlet } from "react-router"
import TabSelector from "./components/TabSelector"

function App() {
  return (
    <div className="text-2xl">
      <TabSelector />
      <Outlet />
    </div>
  )
}

export default App
