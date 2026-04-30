import React from "react";

type InputButtonPropsType = {
  addTodo: () => void;
};

export const AddToDoButton = ({ addTodo } : InputButtonPropsType) => {
  return <button onClick={addTodo}>AddToDoButton</button>;
};
