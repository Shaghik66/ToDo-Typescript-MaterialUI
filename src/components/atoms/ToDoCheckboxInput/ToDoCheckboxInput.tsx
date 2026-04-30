import React from 'react'
import {type ITodo } from '../../hooks/useToDo'

type ToDoCheckboxInputProps = {
    changeStatus : (todo : ITodo) => void
    todo : ITodo
}

export const ToDoCheckboxInput = ({todo , changeStatus} : ToDoCheckboxInputProps) => {
  return (
    <input type="checkbox" checked={todo.isDone}  onChange={() => changeStatus(todo)}/>
  )
}
