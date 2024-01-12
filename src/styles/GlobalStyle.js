import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}

body {
    background-color: #f8f8ff ;
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
    padding: 10px;
}

button {
    cursor: pointer;
}

button:has(svg) {
    /* background-color: #eee !important; */
    color: #585858;
    cursor: pointer;
    font-size: 2rem;
    border-radius: 4px;
    border: none;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

svg {
    width: 2rem;
    height: 2rem;
}
`;

export default GlobalStyle;
