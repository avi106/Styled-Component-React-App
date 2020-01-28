import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const DeleteBtn = styled.button `
  background-color: orange;
  color: white;
  padding: 5px;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: red;
    color: white;
  }

`;

const person = props => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <DeleteBtn onClick={props.click}>Delete</DeleteBtn>
    </StyledDiv>
  );
};

export default person;
