import { ToDoContainer } from "../ToDoContainer/ToDoContainer";
import { type ITodo } from "../../hooks/useToDo";

type ToDosContainerProps = {
  todos: Array<ITodo>;
  removeTodo: (id: number) => void;
  changeStatus : (todo : ITodo) => void
};

export const ToDosContainer = ({ todos, removeTodo, changeStatus }: ToDosContainerProps) => {
  return (
    <section>
      {todos.map((todo) => (
        <ToDoContainer key={todo.id} todo={todo} removeTodo={removeTodo} changeStatus={changeStatus}/>
      ))}
    </section>
  );
};
