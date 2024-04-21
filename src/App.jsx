import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './components/Page'
import PageTwo from './components/Page2/PageTwo'

function App() {

  return (
   
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />} />
      <Route path='/find' element={<PageTwo />} />
    {/* <Header /> */}
    {/* <Page /> */}
   
    </Routes>
   </BrowserRouter>
  )
}

export default App
