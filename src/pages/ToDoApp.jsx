/* eslint-disable react/prop-types */
import TodoList from "../ui/TodoList"

function ToDoApp({filteredList}) {
    return (
        <TodoList filteredList={filteredList} />
    )
}

export default ToDoApp
