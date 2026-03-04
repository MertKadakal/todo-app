import { useState } from "react"
import TodoList from "../components/TodoList"
import { createTodo } from "../interfaces/Todo"

function TodoPage() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (input.trim() === "") return
    const newTodo = createTodo(input)
    setTodos([...todos, newTodo])
    setInput("")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const updateTodo = (id, newText) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  )
}


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded w-full"
            type="text"
            placeholder="Görev yaz..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Ekle
          </button>
        </div>

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
        />

      </div>
    </div>
  )
}

export default TodoPage
