import { type ChangeEvent, type RefObject, type SubmitEvent } from "react";
import { Stack, TextField } from "@mui/material";

type AddTodoPropsType = {
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  handlePreventDefault: (e: SubmitEvent<HTMLFormElement>) => void;
};

export function AddToDoInput({
  text,
  changeText,
  inputRef,
  handlePreventDefault,
}: AddTodoPropsType) {
  return (
    <Stack
      component="form"
      sx={{ width: "25ch" }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={handlePreventDefault}
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
