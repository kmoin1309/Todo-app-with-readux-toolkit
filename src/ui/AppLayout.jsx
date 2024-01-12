import { useState } from "react"
import { useSelector } from "react-redux"

import Heading from "./Heading"
import Button from "./Button"
import Select from "./Select"
import ToDoApp from "../pages/ToDoApp"
import Modal from "./Modal"
import CreateTask from "./CreateTask"
import Row from "./Row"

function AppLayout() {
    const [status , setStatus] = useState("all")
    const list = useSelector(state =>state.task.list)
    let filteredList = useSelector(state => state.task.list.filter(item =>item.status === status ))

    if(status === 'all') {
        filteredList = list
    }

    function handleStatus(e) {
        setStatus(e.target.value)
    }
    
    return (
        <>
            <Heading as="h1">TODO LIST</Heading>
            <Row type="horizontal">
               <Modal>
                 <Modal.Open opens={true}>
                    <Button type="primary">Add Task</Button>
                 </Modal.Open>

                 <Modal.Window>
                    <CreateTask/>
                 </Modal.Window>
               </Modal>

                <Select size="small" value={status} onChange={handleStatus}>
                    <option value="all">All</option>
                    <option value="incompleted">Incompleted</option>
                    <option value="completed">Completed</option>
                </Select>
            </Row>

            <main>
                <ToDoApp filteredList={filteredList}/>
            </main>
        </>
    )
}

export default AppLayout
