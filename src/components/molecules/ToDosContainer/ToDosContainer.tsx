import { ToDoContainer } from "../ToDoContainer/ToDoContainer";
import { type ITodo } from "../../hooks/useToDo";

type ToDosContainerProps = {
  todos: Array<ITodo>;
  removeTodo: (id: number) => void;
};

export const ToDosContainer = ({ todos, removeTodo }: ToDosContainerProps) => {
  return (
    <>
      {todos.map((todo) => (
        <ToDoContainer todo={todo} removeTodo={removeTodo} />
      ))}
    </>
  );
};
