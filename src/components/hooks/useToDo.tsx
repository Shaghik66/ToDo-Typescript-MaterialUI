import { useState, type ChangeEvent } from "react";

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
}

export const useToDo = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  function changeText(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function addTodo() {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: text, isDone: false },
    ]);
  }

  function removeTodo(id: number) {
    return setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeStatus(todo: ITodo) {
    setTodos(
      todos.map((t) => {
        if (todo.id === t.id) {
          return { ...t, isDone: !todo.isDone };
        } else {
          return t;
        }
      }),
    );
  }

  return { text, todos, addTodo, changeText, removeTodo, changeStatus };
};
