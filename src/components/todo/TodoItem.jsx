import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../../store/todoSlice/todoSlice";

function TodoItem({ item, title }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const deleteHandler = () => {
    dispatch(todoActions.delete(item.id));
  };

  const editHandler = () => {
    setEdit(true);
    setValue(title);
  };

  const saveButtonHandler = () => {
    dispatch(todoActions.edit({ id: item.id, value }));
    setEdit(false);
  };

  const completedHandler = () => {
    dispatch(todoActions.completed(item.id));
  };

  return (
    <Container>
      {edit ? (
        <>
          <StyledInput
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <StyledButtonSave onClick={saveButtonHandler}>Save</StyledButtonSave>
        </>
      ) : (
        <Box>
          <Title className={`${item.completed && "todo"}`}>{title}</Title>
          <StyledButton onClick={deleteHandler}>Delete</StyledButton>
          <StyledButtonEdit onClick={editHandler}>Edit</StyledButtonEdit>
          <StyledButtonCompleted onClick={completedHandler}>Completed</StyledButtonCompleted>
        </Box>
      )}
    </Container>
  );
}

export default TodoItem;

const Container = styled.div`
    display: flex;
    margin-left: 37%;
    margin-top: 2rem;
`
const Box = styled.div`
    display: flex;
    justify-content: space-around;
    
`
const Title = styled.li`
list-style: none;
font-size: 30px;
   &.todo {
    text-decoration: line-through;
  }
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  margin-left: 8rem;
`;

const StyledButtonEdit = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

const StyledButtonCompleted = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

const StyledButtonSave = styled.button`
  background-color: #070751;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;