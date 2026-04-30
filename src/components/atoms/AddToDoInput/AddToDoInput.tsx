import { type ChangeEvent } from "react";
import {Stack, TextField} from "@mui/material";

type AddTodoPropsType = {
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
};


export function AddToDoInput({ text, changeText }: AddTodoPropsType) {
  return (
    <Stack
      component="form"
      sx={{ width: "25ch" }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        value={text}
        onChange={changeText}
      />
    </Stack>
  );
}
