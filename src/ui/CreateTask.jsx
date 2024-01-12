/* eslint-disable*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addTask} from "../../taskSlice";
import FormItem from "./Form";

function CreateTask({onCloseModal }) {
    const [title,setTitle] = useState("")
    const dispatch = useDispatch()
     
    function handleSubmit(e) {
        e.preventDefault()
        if(!title) {
            toast.error("Please enter a title")
            return null;
        }


        const newTask = {
            id: Date.now(),
            title ,
            status:"incompleted",
            checked:false,
            date : new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
        }

        dispatch(addTask(newTask))
        onCloseModal?.()
        toast.success("Task added successfully")
    }

    return (
        <FormItem onSubmit={handleSubmit}  title={title} setTitle={setTitle} onCloseModal={onCloseModal}/>
    )
}

export default CreateTask
