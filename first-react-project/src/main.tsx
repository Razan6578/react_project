import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Main from './pages/Main/index.tsx'
import Book from './pages/Book/index.tsx'
import Books from './pages/Books/index.tsx'
import Registration from './pages/Registration/index.tsx'
import { checkToken } from './services/localStorageHelper.ts'
import Login from './pages/Login/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/book" element={<Book />} />
      <Route path="/books" element={ checkToken() ? <Books/> : <Navigate to = "/registration" /> } />      
      <Route path="/registration" element={<Registration />} />   
      <Route path="/login" element={<Login />} />       
    </Routes>
  </BrowserRouter>
)
