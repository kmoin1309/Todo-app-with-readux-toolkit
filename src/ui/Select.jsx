import styled, { css } from "styled-components";

const sizes = {
  small: css`
    background-color: #cccdde;
    color: #585858;
    width: 150px;
    border-radius: 6px;
  `,

  large: css`
    width: 100%;
    background-color: white;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  `,
};

const Select = styled.select`
  ${(props) => sizes[props.size]}

  cursor: pointer;
  padding: 1rem;
  border: none;
  font-size: 1.6rem;
`;

export default Select;
