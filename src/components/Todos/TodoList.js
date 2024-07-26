import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoLists(props) {
    const {list}=props
    return list.length?(
        <div className={styles.divTodoList}>
            {list.map((toDo)=>{
        return(<Todo key={toDo.id} element={toDo}
                     deletePost = {props.deletePost}
                     id={toDo.id} done={false}
                     markDone = {props.markAsDone}/>)
            })}
        </div>
    ):
        <h2>There are no plans yet</h2>

}

export default TodoLists