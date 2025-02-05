import React, { useState } from "react";
import TodoList from "./TodoList";
import DarkmodeToggle from "./DarkmodeToggle";

const TodoCard = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: false },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // NEW: Filter state
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter the todos before passing to TodoList
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all" => show everything
  });

  return (
    <div className="mx-auto max-w-md p-4">
      {/* CARD HEADER */}
      <header className="flex items-center justify-between mb-6 mt-7">
        <h1 className="text-3xl font-bold tracking-widest text-white">TODO</h1>
        <DarkmodeToggle />
      </header>

      {/* CARD BODY */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden my-7">
        {/* Create new TODO input */}
        <form
          onSubmit={addTodo}
          className="p-4 border-b border-gray-200 dark:border-gray-700"
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Create a new todo..."
            className="w-full text-sm bg-transparent outline-none
                       text-gray-700 dark:text-gray-200
                       placeholder-gray-400 dark:placeholder-gray-500"
          />
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
        {/* Pass filtered todos to TodoList */}
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />

        {/* CARD FOOTER */}
        <div className="flex items-center justify-between p-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{todos.length} items left</span>

          {/* Desktop Filters */}
          <div className="space-x-2 hidden md:block">
            <button
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "text-blue-500"
                  : "hover:text-blue-500 dark:hover:text-blue-400"
              }
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={
                filter === "active"
                  ? "text-blue-500"
                  : "hover:text-blue-500 dark:hover:text-blue-400"
              }
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={
                filter === "completed"
                  ? "text-blue-500"
                  : "hover:text-blue-500 dark:hover:text-blue-400"
              }
            >
              Completed
            </button>
          </div>

          <button
            className="hover:text-red-400 dark:hover:text-red-300"
            onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      <div
        className="
          px-16 py-4 text-sm text-gray-500 dark:text-gray-400
          bg-white dark:bg-gray-800 shadow-md
          rounded-md overflow-hidden my-7 md:hidden
        "
      >
        <div className="space-x-2 flex items-center justify-around">
          <button
            onClick={() => setFilter("all")}
            className={
              filter === "all"
                ? "text-blue-500"
                : "hover:text-blue-500 dark:hover:text-blue-400"
            }
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={
              filter === "active"
                ? "text-blue-500"
                : "hover:text-blue-500 dark:hover:text-blue-400"
            }
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={
              filter === "completed"
                ? "text-blue-500"
                : "hover:text-blue-500 dark:hover:text-blue-400"
            }
          >
            Completed
          </button>
        </div>
      </div>

      <div className="my-6">
        <p className="text-center text-sm text-DarkGrayishBlue dark:text-LightGrayishBlue">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
