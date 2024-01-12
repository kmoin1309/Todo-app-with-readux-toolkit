/* eslint-disable react/prop-types */
import styled from "styled-components"
import TodoItem from "./TodoItem"

const StyledList = styled.ul`
  background-color: #ecedf6;
  padding: 2rem;
  border-radius: 12px;
`

const Empty = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: #585858;
  font-weight: 500;
`

function TodoList({filteredList}) {
    return (
        <StyledList>
           {filteredList?.length > 0 ?  filteredList.map(item => <TodoItem key={item.id} item={item}/>) : <Empty>No Todos</Empty>}
        </StyledList>
    )
}

export default TodoList
