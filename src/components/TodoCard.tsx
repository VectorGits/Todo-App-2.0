import React, { useState } from "react";
import TodoList from "./TodoList";
import DarkmodeToggle from "./DarkmodeToggle";
import {
  DragDropContext,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

const TodoCard = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Use This Todo App", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "Star this Repo on", completed: false },
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

  // Handle drag-and-drop reordering
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return; // user dropped outside the list

    // Make a copy of current todos
    const items = Array.from(todos);
    // Remove the dragged item
    const [movedItem] = items.splice(result.source.index, 1);
    // Insert it in the new position
    items.splice(result.destination.index, 0, movedItem);
    setTodos(items);
  };

  // Filter the todos before passing to TodoList
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all" => show everything
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="mx-auto max-w-md p-4">
        {/* CARD HEADER */}
        <header className="flex items-center justify-between mb-6 mt-7">
          <h1 className="text-3xl font-bold tracking-widest text-white">TODO</h1>
          <DarkmodeToggle />
        </header>

        {/* CARD BODY (New ToDo Input) */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden my-7">
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

        {/* WRAP TodoList + Footer in a Droppable */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">

          <Droppable droppableId="todos">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {/* Pass filtered todos to TodoList (which has <Draggable> items) */}
                <TodoList
                  todos={filteredTodos}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />

                

                {/* IMPORTANT: placeholder for dropped item */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* CARD FOOTER */}
          <div className="flex items-center justify-between p-4 text-sm md:border-t dark:md:border-LightGrayishBlue text-gray-500 dark:text-gray-400">
            <span>
              {todos.filter((todo) => !todo.completed).length} items left
            </span>

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
    </DragDropContext>
  );
};

export default TodoCard;
