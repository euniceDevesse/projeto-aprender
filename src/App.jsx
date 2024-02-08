import React from "react"
import './App.css'
import Header from './components/header/header'
import DescriptionLeft from "./components/descriptionLeft/descriptionLeft"

function App() {
  return (
    <div className="app">
      <div className='header'>
        <Header />
        <DescriptionLeft />
      </div>
    </div>

  )
}

export default App
