import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Main from './pages/Main/index.tsx'
import Book from './pages/Book/index.tsx'
import Books from './pages/Books/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/book" element={<Book />} />
      <Route path="/books" element={<Books />} />      
    </Routes>
  </BrowserRouter>
)
