import { type ChangeEvent, type RefObject, type SubmitEvent } from "react";
import { AddToDoForm } from "../../molecules/AddToDoForm/AddToDoForm";
import { ToDosContainer } from "../../molecules/ToDosContainer/ToDosContainer";
import { type ITodo } from "../../hooks/useToDo";

type HeaderProps = {
  text: string;
  addTodo: () => void;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
  todos: Array<ITodo>;
  removeTodo: (id: number) => void;
  changeStatus: (todo: ITodo) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  handlePreventDefault: (e: SubmitEvent<HTMLFormElement>) => void;
};

export const Header = ({
  text,
  addTodo,
  changeText,
  todos,
  removeTodo,
  changeStatus,
  inputRef,
  handlePreventDefault,
}: HeaderProps) => {
  return (
    <header>
      <AddToDoForm
        text={text}
        addTodo={addTodo}
        changeText={changeText}
        inputRef={inputRef}
        handlePreventDefault={handlePreventDefault}
      />
      <ToDosContainer
        todos={todos}
        removeTodo={removeTodo}
        changeStatus={changeStatus}
      />
    </header>
  );
};
