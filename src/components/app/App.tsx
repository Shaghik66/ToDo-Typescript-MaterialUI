import { useToDo } from "../hooks/useToDo"
import { Header } from "../organisms/Header/Header"

function App() {
const {text, addTodo, changeText} = useToDo()

  return (
    <>
    <Header text={text} addTodo={addTodo} changeText={changeText}/>
    </>
  )
}

export default App
