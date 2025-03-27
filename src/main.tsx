import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import BaitsAndLuresPage from './components/baits/BaitsAndLuresPage.tsx'
import JournalPage from './components/fish/JournalPage.tsx'
import StorePage from './components/store/StorePage.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<JournalPage />} />
          <Route path='/baits' element={<BaitsAndLuresPage />} />
          <Route path='/store' element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
