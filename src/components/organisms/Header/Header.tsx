import { type ChangeEvent } from 'react'
import { AddToDoForm } from '../../molecules/AddToDoForm/AddToDoForm'
import { ToDosContainer } from '../../molecules/ToDosContainer/ToDosContainer'
import { type ITodo } from '../../hooks/useToDo'

type HeaderProps = {
    text : string
    addTodo : ( ) => void
    changeText : (e : ChangeEvent<HTMLInputElement>) => void
    todos: Array<ITodo>
    removeTodo : (id : number) => void
    changeStatus : (todo : ITodo) => void
}

export const Header = ({text, addTodo, changeText, todos, removeTodo, changeStatus} : HeaderProps) => {
  return (
    <header>
        <AddToDoForm text={text} addTodo={addTodo} changeText={changeText} />
        <ToDosContainer todos={todos} removeTodo={removeTodo} changeStatus={changeStatus}/>
    </header>
  )
}
