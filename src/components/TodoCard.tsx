// import React from "react"
import React, { useState } from "react";
import TodoList from "./TodoList";


const TodoCard = () => {
  const [todos, setTodos] = useState([
    { id:1, text: "Complete online JavaScript course", completed: false },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add A New Todo, baby!
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    setTodos([...todos, { id:Date.now(), text:newTodo, completed: false }]);
    setNewTodo("")
  };

  // Toggle completion
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
      <div className="mx-auto max-w-md p-4 border">
        {/* CARD HEADER */}
        <header className="flex items-center justify-between mb-6 mt-7">
          <h1 className="text-3xl font-bold tracking-widest text-white">
            TODO
          </h1>
          {/* DARK/Light Mode switcher */}
            <button className="text-white hover:text-gray-200 transition-colors">
              <img src="/icon-moon.svg" alt="Dark/Light Mode Switcher" className="h-6 w-6" />
            </button>
        </header>

        {/* CARD BODY */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden my-7">
          {/* Create new TODO input */}
          <form onSubmit={addTodo} className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Create a new todo..."
              className="w-full text-sm bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </form>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
          {/* TodoList */}

          <TodoList todos={todos} toggleTodo={toggleTodo} />

          {/* CARD FOOTER */}
          <div className="flex items-center justify-between p-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{todos.length} items lefts</span>
            <div className="space-x-2">
              <button className="hover:text-blue-500 dark:hover:text-blue-400">
                All
              </button>
              <button className="hover:text-blue-500 dark:hover:text-blue-400">
                Active
              </button>
              <button className="hover:text-blue-500 dark:hover:text-blue-400">
                Completed
              </button>
            </div>
            <button className="hover:text-red-400 dark:hover:text-red-300" onClick={() => setTodos(todos.filter(todo => !todo.completed))}>
              Clear Completed
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoCard