import { useToDo } from "../hooks/useToDo";
import { Header } from "../organisms/Header/Header";

function App() {
  const {
    text,
    addTodo,
    changeText,
    todos,
    removeTodo,
    changeStatus,
    inputRef,
  } = useToDo();

  return (
    <main>
      <Header
        text={text}
        addTodo={addTodo}
        changeText={changeText}
        todos={todos}
        removeTodo={removeTodo}
        changeStatus={changeStatus}
        inputRef={inputRef}
      />
    </main>
  );
}

export default App;
