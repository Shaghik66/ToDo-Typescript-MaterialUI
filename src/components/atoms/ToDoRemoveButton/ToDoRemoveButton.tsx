import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ToDoRemoveButtonProps = {
  id: number;
  removeTodo: (id: number) => void;
};

export function ToDoRemoveButton({ id, removeTodo }: ToDoRemoveButtonProps) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
        <DeleteIcon sx={{ color: "pink" }} />
      </IconButton>
    </Stack>
  );
}
