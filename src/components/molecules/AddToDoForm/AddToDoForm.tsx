import { type ChangeEvent } from "react";
import {Box} from "@mui/material"
import { AddToDoInput } from "../../atoms/AddToDoInput/AddToDoInput";
import { AddToDoButton } from "../../atoms/AddToDoButton/AddToDoButton";

type AddToDoFormProps = {
  text: string;
  addTodo: () => void;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AddToDoForm = ({
  text,
  addTodo,
  changeText,
}: AddToDoFormProps) => {
  return (
    <Box sx={{display: "flex"}}>
      <AddToDoInput text={text} changeText={changeText} />
      <AddToDoButton addTodo={addTodo} />
    </Box>
  );
};
