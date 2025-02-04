// import { useState } from 'react'
// import './App.css'

import TodoCard from "./components/TodoCard"


function App() {

  return (
    <>
      <div className="bg-[url('/bg-desktop-light.jpg')] dark:bg-[url('/bg-desktop-dark.jpg')] bg-auto bg-no-repeat h-screen">
        <TodoCard />
      </div>
    </>
  )
}

export default App
