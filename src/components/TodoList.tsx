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
            <label className="fles items-center space-x-2">
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="form-checkbox" 
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