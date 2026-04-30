import { Box } from "@mui/material";
import { ToDoRemoveButton } from "../../atoms/ToDoRemoveButton/ToDoRemoveButton";
import { ToDoCheckboxInput } from "../../atoms/ToDoCheckboxInput/ToDoCheckboxInput";
import { type ITodo } from "../../hooks/useToDo";

type ToDoContainerProps = {
  todo: ITodo;
  removeTodo: (id: number) => void;
  changeStatus: (todo: ITodo) => void;
};

export const ToDoContainer = ({
  todo,
  removeTodo,
  changeStatus,
}: ToDoContainerProps) => {
  return (
    <Box sx={{display:"flex"}}>
      <ToDoCheckboxInput changeStatus={changeStatus} todo={todo} />
      <p>{todo.title}</p>
      <ToDoRemoveButton removeTodo={removeTodo} id={todo.id} />
    </Box>
  );
};
