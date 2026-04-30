import React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { type ITodo } from "../../hooks/useToDo";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

type ToDoCheckboxInputProps = {
  changeStatus: (todo: ITodo) => void;
  todo: ITodo;
};

export function ToDoCheckboxInput({
  todo,
  changeStatus,
}: ToDoCheckboxInputProps) {
  return (
    <div>
      <Checkbox
        {...label}
        checked={todo.isDone}
        onChange={() => changeStatus(todo)}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
