import { type ChangeEvent, type RefObject } from "react";
import {Box} from "@mui/material"
import { AddToDoInput } from "../../atoms/AddToDoInput/AddToDoInput";
import { AddToDoButton } from "../../atoms/AddToDoButton/AddToDoButton";

type AddToDoFormProps = {
  text: string;
  addTodo: () => void;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef : RefObject <HTMLInputElement | null> 
};

export const AddToDoForm = ({
  text,
  addTodo,
  changeText,
  inputRef
}: AddToDoFormProps) => {
  return (
    <Box sx={{display: "flex"}}>
      <AddToDoInput text={text} changeText={changeText} inputRef={inputRef}/>
      <AddToDoButton addTodo={addTodo} />
    </Box>
  );
};
