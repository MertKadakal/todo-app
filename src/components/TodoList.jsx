import TodoItem from "./TodoItem"

function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default TodoList
