import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Food from './components/food.jsx'
import Drinks from './components/drinks.jsx'
import Snacks from './components/snacks.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/food" element={<Food/>}></Route>
      <Route path="/drinks" element={<Drinks/>}></Route>
      <Route path="/snacks" element={<Snacks/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
