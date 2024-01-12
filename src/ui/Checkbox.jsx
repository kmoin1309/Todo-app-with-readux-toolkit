import styled from "styled-components";

const Checkbox = styled.input`
cursor: pointer;
display: flex;
flex-basis: 25px;
align-items: center;
justify-content: center;
height: 30px;
border: 2px;
padding: 6px;

&:checked {
    background-color: rgb(100, 111, 240);
    color:white
}

`

export default Checkbox