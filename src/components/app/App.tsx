import { useToDo } from "../hooks/useToDo"
import { Header } from "../organisms/Header/Header"

function App() {
const {text, addTodo, changeText, todos, removeTodo} = useToDo()

  return (
    <main>
    <Header text={text} addTodo={addTodo} changeText={changeText} todos={todos} removeTodo={removeTodo}/>
    </main>
  )
}

export default App
