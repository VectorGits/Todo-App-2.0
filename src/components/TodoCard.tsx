import React from "react"


const TodoCard= () => {
  return (
      <div className="mx-auto max-w-md p-4">
        {/* CARD HEADER */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-widest text-white">
            TODO
          </h1>
          {/* DARK/Light Mode switcher */}
            <button className="text-white hover:text-gray-200 transition-colors">
              <img src="/icon-moon.svg" alt="Dark/Light Mode Switcher" className="h-6 w-6" />
            </button>
        </header>

        {/* CARD BODY */}
        <div className="bg-white "></div>
      </div>
  )
}

export default TodoCard