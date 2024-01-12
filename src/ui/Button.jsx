import styled, { css } from "styled-components";

const variations = {
   primary : css`
    background-color: #646ff0;
    color:white;
   `,

   secondary : css`
     background-color: #cccdde;
     color: #646681;
   `
}


const Button = styled.button`
  ${props => variations[props.type]};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 6px;
  border: none;
`

export default Button