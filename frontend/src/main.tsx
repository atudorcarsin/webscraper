import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Index from './Index.tsx'
import Login from './Login.tsx'
import './main.scss'
import './axiosConfig.ts'
import './getCsrfToken.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<Index/>} />
          <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
