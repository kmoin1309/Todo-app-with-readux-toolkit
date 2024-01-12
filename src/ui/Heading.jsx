import styled, { css } from "styled-components"

const Heading = styled.h1 `
${props => props.as=="h1" && css`
color: #585858;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 2rem auto 1.5rem;
    text-align: center;
`}

${props => props.as =="h3" && css`
   font-size: 2rem;
   font-weight: 600;
   margin-bottom: 2rem;
   margin-top: 0;
   text-transform: capitalize;
   color: #585858;
`}
`



export default Heading
