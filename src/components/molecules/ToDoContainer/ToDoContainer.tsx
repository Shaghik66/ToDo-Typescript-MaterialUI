import { ToDoRemoveButton } from "../../atoms/ToDoRemoveButton/ToDoRemoveButton";
import { ToDoCheckboxInput } from "../../atoms/ToDoCheckboxInput/ToDoCheckboxInput";
import { type ITodo } from "../../hooks/useToDo";

type ToDoContainerProps = {
    todo: ITodo
    removeTodo : (id : number) => void
}

export const ToDoContainer = ({todo, removeTodo} : ToDoContainerProps) => {


  return (
    <section>
      <ToDoCheckboxInput />
      <p>{todo.title}</p>
      <ToDoRemoveButton removeTodo={removeTodo} id={todo.id}/>
    </section>
  );
};
