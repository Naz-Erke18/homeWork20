import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoActions } from '../../store/todoSlice/todoSlice'
import TodoList from './TodoList'

function TodoForm() {
    const dispatch = useDispatch()
const[inputValue,setInputValue]=useState("")


const inputChangeHandler = (e)=>{
    setInputValue(e.target.value)
}

const submitHandler = (e)=>{
    e.preventDefault()
    const data = {
        id:nanoid(),
        title:inputValue
    }
    dispatch(todoActions.add(data))
    setInputValue("")
}

const deleteAll = ()=>{
    dispatch(todoActions.deleteAll([]))
}

  return (
    <>
      <div>
        <StyledInput
          type="text"
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <StyledButton onClick={submitHandler}>add</StyledButton>
        <StyledButtonDelete onClick={deleteAll}>Delete All</StyledButtonDelete>
      </div>
      <TodoList />
    </>
  );
}

export default TodoForm

const StyledInput = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 10px;
`

const StyledButton = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

const StyledButtonDelete = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

