import { type ChangeEvent } from "react";

type AddTodoPropsType = {
  text : string
  changeText: (e : ChangeEvent<HTMLInputElement>) => void;
};

export const AddToDoInput = ({text, changeText} : AddTodoPropsType) => {
  return (
    <input value={text} onChange={changeText} type="text"  />
  )
}
