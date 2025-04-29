import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
      
      <Route index element={<Home></Home>}></Route>
      <Route path='/listedbooks' element={<ListedBooks></ListedBooks>}></Route>
      <Route path='/pagestoread' element={<PagesToRead></PagesToRead>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/about' element={<About></About>}></Route>

      
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
