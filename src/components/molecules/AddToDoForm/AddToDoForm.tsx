import { type ChangeEvent, type RefObject, type SubmitEvent } from "react";
import { Box } from "@mui/material";
import { AddToDoInput } from "../../atoms/AddToDoInput/AddToDoInput";
import { AddToDoButton } from "../../atoms/AddToDoButton/AddToDoButton";

type AddToDoFormProps = {
  text: string;
  addTodo: () => void;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  handlePreventDefault: (e: SubmitEvent<HTMLFormElement>) => void;
};

export const AddToDoForm = ({
  text,
  addTodo,
  changeText,
  inputRef,
  handlePreventDefault,
}: AddToDoFormProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AddToDoInput text={text} changeText={changeText} inputRef={inputRef} handlePreventDefault={handlePreventDefault}/>
      <AddToDoButton addTodo={addTodo} />
    </Box>
  );
};
