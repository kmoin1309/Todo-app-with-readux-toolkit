/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  deleteTask, editTask } from "../../taskSlice";
import styled from "styled-components";

import Label from './Label';
import DateItem from "./DateItem";
import Checkbox from "./Checkbox";
import ButtonGroup from "./ButtonGroup";
import Modal from "./Modal";
import EditTask from "./EditTask";


const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 1rem;
    margin: 10px 0;
`


const ItemText = styled.div`
display: flex;
align-items: center;
flex-basis: 70%;
gap: 0.5rem;

`


function TodoItem({item}) {
  let {id , title , time, date ,checked} = item;
  const [isChecked , setIsChecked] = useState(true)
  const dispatch =useDispatch()

   function handleDelete() {
     dispatch(deleteTask(id))
   }

   function handleSelect(e) {
    setIsChecked(!e.target.checked)
  
    if(isChecked ) {
      const newTask = {
        id,title,time,date,status:"completed",checked:true
      }
      dispatch(editTask(id,newTask))
    }
    else{
    const newTask = {
      id,title,time,date,status:"incompleted",checked:false
    }
    dispatch(editTask(id,newTask))
  }
   }


  return (
      <Li>
      <ItemText>
        <Checkbox type="checkbox" defaultChecked={checked} onChange={handleSelect}  />

        <div>
          <Label checked={checked} >{title}</Label>
          <DateItem>{time} {date}</DateItem>
        </div>
      </ItemText>

      <ButtonGroup>
         <Modal>
           <Modal.Open opens={true}>
           <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </button>
           </Modal.Open>

           <Modal.Window>
               <EditTask item={item} isEditing={true}/>
           </Modal.Window>
         </Modal>

          <button onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
      </ButtonGroup>

    </Li>
  );
}

export default TodoItem;
