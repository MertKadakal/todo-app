import { useState } from "react"

function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleUpdate = () => {
    if (editText.trim() === "") return
    onUpdate(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <div className="flex justify-between items-center bg-gray-50 p-2 rounded mb-2">
      
      {isEditing ? (
        <input
          className="border p-1 rounded w-full mr-2"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => onToggle(todo.id)}
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="text-green-600"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500"
          >
            Düzenle
          </button>
        )}

        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500"
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default TodoItem
