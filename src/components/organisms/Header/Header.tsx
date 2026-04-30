import { type ChangeEvent } from 'react'
import { AddToDoForm } from '../../molecules/AddToDoForm/AddToDoForm'

type HeaderProps = {
    text : string
    addTodo : ( ) => void
    changeText : (e : ChangeEvent<HTMLInputElement>) => void
}

export const Header = ({text, addTodo, changeText} : HeaderProps) => {
  return (
    <header>
        <AddToDoForm text={text} addTodo={addTodo} changeText={changeText}/>
    </header>
  )
}
