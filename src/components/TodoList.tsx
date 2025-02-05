import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-4 text-gray-600 dark:text-gray-300
                     flex items-center justify-between"
        >
          {/* Left side: Checkbox + Text */}
          <label className="flex items-center space-x-3">
            {/* Checkbox container */}
            <div className="relative flex items-center justify-center w-6 h-6">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="appearance-none rounded-full h-5 w-5
                           border border-gray-300 focus:outline-none
                           checked:bg-gradient-to-br
                           checked:from-CheckBlue
                           checked:to-CheckPurple
                           checked:border-transparent"
              />
              {todo.completed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-1.5 top-1.5 w-3 h-3 text-white"
                  viewBox="0 0 11 9"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M1 4.304L3.696 7l6-6" />
                </svg>
              )}
            </div>
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.text}
            </span>
          </label>
  
          {/* Right side: "X" button */}
          <button
            onClick={() => removeTodo(todo.id)}
            className="p-1 text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label="Remove Todo"
          >
            <img src="/icon-cross.svg" alt="" />
          </button>
        </div>
      ))}
    </div>
  );  
};

export default TodoList;

// Gotta Keep my streaaaak