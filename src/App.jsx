import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import AppLayout from "./ui/AppLayout"
import { Toaster } from "react-hot-toast"

const StyledApp = styled.div`
  max-width: 650px;
  margin: 10px auto;
`

function App() {
  return(
    <StyledApp>
    <GlobalStyle/>
    <AppLayout/>
    <Toaster position="bottom-right" gutter={8} toastOptions={{
      success: {
        duration:3000,
      },
      error:{
        duration : 3000
      },
      style : {
        fontSize:"1.6rem"
      }
    }}/>
    </StyledApp>
  )
}

export default App