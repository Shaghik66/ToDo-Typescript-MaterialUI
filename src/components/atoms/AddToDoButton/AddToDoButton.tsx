import React from "react";
import {Box, Button} from "@mui/material";

type InputButtonPropsType = {
  addTodo: () => void;
};

export function AddToDoButton({ addTodo }: InputButtonPropsType) {
  return (
    <Box sx={{ "& button": { m: 1 } } }>
      <div>
        <Button onClick={addTodo} variant="contained" size="small">
            Send
        </Button>
      </div>
    </Box>
  );
}
