import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* TodoList */}
        {todos.map(todo => (
          <div key={todo.id} className="p-4 text-gray-600 dark:text-gray-300">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="appearance-none rounded-full h-5 w-5 border border-gray-300 focus:outline-none checked:bg-gradient-to-r checked:from-purple-500 checked:to-blue-500 checked:border-transparent checked:relative checked:before:content-['/'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-white" 
              />
              <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList