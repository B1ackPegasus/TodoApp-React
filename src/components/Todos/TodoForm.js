import {useState} from "react";
import styles from "./TodoForm.module.css";

function TodoForm ({addToDo}){

    const[text,setText]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        addToDo(text)
        setText('')
    }
    return (
            <form onSubmit={handleSubmit} className={styles.formToDo}>
            <input className={styles.toDoInput}
                   type="text"
                   placeholder="Enter new todo"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}
            />
            <button type = "submit" className={styles.buttonInput}>Add</button>
            </form>
    )
}
export default TodoForm;