import { createSlice } from "@reduxjs/toolkit"
import { getDataFromLocalStorage, setDataToLocalStorage } from "./hooks/useLocalStorage"


const initialState = {
    list: getDataFromLocalStorage("List", [])
}

const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers : {
        addTask(state,action) {
            state.list.push(action.payload)

            setDataToLocalStorage("List", state.list)
        },
        deleteTask(state, action) {
           state.list = state.list.filter(item => item.id !== action.payload)

            setDataToLocalStorage("List", state.list)
        },
        editTask:{
            prepare(id,newTask) {
                return {payload:{id,newTask}}
            },
        reducer(state,action) {
            state.list = state.list.map(item => item.id === action.payload.id ? action.payload.newTask : item)
            setDataToLocalStorage("List", state.list)
        }},
        editCheck:{
            prepare(id,checked,status) {
                return {payload:{id,checked,status}}
            },
            reducer(state, action) {
          const item = state.list.find(item=>item.id === action.payload.id)
          item.checked = action.payload.checked,
          item.status = action.payload.status
        }}
    }
})




export const  {addTask , deleteTask ,editTask , editCheck} = taskSlice.actions

export const filteredCompletedStatus = state=>state.task.list.filter(item => item.status === "completed")
export const filteredInCompletedStatus = state=>state.task.list.filter(item => item.status === "incompleted")
export const filteredAllStatus = state=>state.task.list

export default taskSlice.reducer
