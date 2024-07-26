import './App.css';
import styles from "./App.module.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import {useState} from "react";
import ButtonsPanel from "./components/UI/ButtonsPanel";
import {v4 as uuidv4} from "uuid";

function App() {

    const [array, addToArray] = useState([]);

    function addTodoHandler(text)
    {
        const newTodo={
            text:text,
            done: false,
            id:uuidv4()

        }
        addToArray([...array,newTodo])

    }

    function deleteTodoHandler(id){
      addToArray(array.filter((item) => item.id !== id))
    }

    function markAsDone(id){
        addToArray(array.map((toDo) =>{
            return toDo.id===id ?
                {...toDo, done:!toDo.done}:
                {...toDo}})) //...create new
    }

    function deleteAllTodosHandler(){
        addToArray([])
    }

    function deleteAllDoneTodosHandler(){
        addToArray(array.filter((item, id) => item.done === false ))
    }

    function CheckNumberOfDoneTodosHandler(){
        let counter= 0
        array.map((item,id)=>{ return item.done===true?counter++:counter})
        return counter;
    }

  return (
    <div className="App">
      <h1 className={styles.h1InApp}> Todo App</h1>
        <TodoForm addToDo = {addTodoHandler}/>
        <ButtonsPanel functionDeleteAllTodosHandler = {deleteAllTodosHandler} functionDeleteAllDoneTodosHandler = {deleteAllDoneTodosHandler}/>
   <TodoList list = {array} deletePost = {deleteTodoHandler} markAsDone = {markAsDone} />
        { CheckNumberOfDoneTodosHandler() > 0 ? <h2> Done { CheckNumberOfDoneTodosHandler() } tasks </h2>:''}
    </div>
  );
}

export default App;
