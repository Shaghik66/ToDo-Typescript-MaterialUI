import { type ChangeEvent, type RefObject } from "react";
import { Stack, TextField } from "@mui/material";

type AddTodoPropsType = {
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export function AddToDoInput({ text, changeText, inputRef }: AddTodoPropsType) {
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
        inputRef={inputRef}
      />
    </Stack>
  );
}
