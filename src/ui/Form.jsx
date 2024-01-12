/* eslint-disable react/prop-types */
import styled from "styled-components"
import Row from "./Row"
import Label from "./Label"
import Input from "./Input"
import ButtonGroup from "./ButtonGroup"
import Button from "./Button"

const Form = styled.form`
width: 100%;
`
function FormItem({itemTitle , setTitle , onEdit , onSubmit , title , onCloseModal}) {
    
    return (
        <Form onSubmit={itemTitle ?onEdit :onSubmit}>
            <Row type="vertical">
                <Label size={1.6}>Title</Label>
                <Input type="text" defaultValue={itemTitle || title} onChange={(e) =>setTitle(e.target.value)}/>
            </Row> 


            <ButtonGroup>
                <Button type="primary">{itemTitle ? "Update Task":"Add Task"}</Button>
                <Button type="secondary" onClick={onCloseModal}>Cancel</Button>
            </ButtonGroup>
        </Form>
    )
}

export default FormItem
