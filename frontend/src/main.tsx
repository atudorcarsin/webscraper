import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Index from './Index.tsx'
import Login from './Login.tsx'
import GroupDetail from './GroupDetail.tsx'
import Items from './Items.tsx'
import './main.scss'
import './axiosConfig.ts'
import './getCsrfToken.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<Index/>} />
          <Route path="login" element={<Login/>} />
          <Route path="group/:groupId" element={<GroupDetail/>} />
          <Route path="group/:groupId/items" element={<Items/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
