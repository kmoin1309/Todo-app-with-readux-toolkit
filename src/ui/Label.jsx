import styled from "styled-components";

const Label = styled.label`
  display: block;
  color: #585855;
  font-size: ${props => props.size ? `${props.size}rem`:'1.4rem'};
  font-weight: 500;
  word-break: break-all;
  text-decoration:${props => props.checked === true ? 'line-through' : "none"};
`
export default Label