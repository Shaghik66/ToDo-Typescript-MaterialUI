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
    handlePreventDefault
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
        handlePreventDefault={handlePreventDefault}
      />
    </main>
  );
}

export default App;
