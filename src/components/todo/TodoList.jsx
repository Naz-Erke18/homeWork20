import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <ul>
        {todos.map((item) => {
          return <TodoItem item={item} title={item.title} key={item.id}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
