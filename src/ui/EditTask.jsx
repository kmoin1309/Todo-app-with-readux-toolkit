/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { editTask } from "../../taskSlice";
import FormItem from "./Form"

function EditTask({item,isEditing,onCloseModal}) {
    const {title : itemTitle,checked , status, id} = item
    const [title,setTitle] = useState(itemTitle)
    const dispatch = useDispatch()

    function handleSubmit (e) {
        e.preventDefault()
       if(!title) {
        toast.error("Please enter a title")
        return null;
       }

       const newTask = {
        id:item.id,
        title,
        status,
        checked,
        date : new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString()
       }
       dispatch(editTask(id,newTask))
       onCloseModal?.()
       toast.success("Task Edited successfully")
    }

    return (
        <div>
            <FormItem itemTitle={itemTitle}  setTitle={setTitle}  isEditing={isEditing} onEdit={handleSubmit} onCloseModal={onCloseModal} />
        </div>
    )
}

export default EditTask
