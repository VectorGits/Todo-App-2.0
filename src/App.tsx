// import { useState } from 'react'
// import './App.css'

import TodoCard from "./components/TodoCard"


function App() {

  return (
    <>
      <div className="bg-VeryLightGray dark:bg-VeryDarkBlue ">
        <div 
          className="bg-[url('/bg-desktop-light.jpg')] 
          dark:bg-[url('/bg-desktop-dark.jpg')] bg-auto 
          bg-no-repeat min-h-screen">
          <TodoCard />
        </div>
      </div>
    </>
  )
}

export default App
