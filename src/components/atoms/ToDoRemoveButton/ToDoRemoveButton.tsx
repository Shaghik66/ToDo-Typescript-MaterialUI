

type ToDoRemoveButtonProps = {
    id : number 
    removeTodo : (id : number) => void
}

export const ToDoRemoveButton = ({id, removeTodo} :ToDoRemoveButtonProps) => {
  return (
    <button onClick={() => removeTodo(id)}>ToDoRemoveButton</button>
  )
}
