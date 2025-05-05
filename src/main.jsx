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
import Bookdetiels from './Components/Bookdetiels/Bookdetiels.jsx'
import Listbook from './Components/Listbook/Listbook.jsx'
import Wishlistbook from './Components/Wishlistbook/Wishlistbook.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
      
      <Route index element={<Home></Home>}></Route>
      <Route path='/listedbooks' element={<ListedBooks></ListedBooks>}></Route>
      <Route path='/pagestoread' element={<PagesToRead></PagesToRead>}>
      <Route path='listbook' element={<Listbook></Listbook>}></Route>
      <Route path='wishlistbook' element={<Wishlistbook></Wishlistbook>}></Route>
      
      </Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/book/:bookId' element={<Bookdetiels></Bookdetiels>}></Route>

      
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
