import React, {useContext} from "react";
import "./assets/css/TodoItem.css";
import {TodoAppContext} from "./context/TodoApp.context";

const TodoItem = ({ task, id }) => {
    const { deleteTodo} = useContext(TodoAppContext);
  return (
    <div className="flexy item">
      <p>{task}</p>
      <div className="svg">
        <svg
          onClick={() => deleteTodo(id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>Delete Todo</title>
          <g fill="none">
            <path
    d="M15.59 7L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"
    fill="#111111"
    />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TodoItem;
