import {faThumbtack} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './Todo.module.css';
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Todo(props) {
    return(
        <div className={props.element.done? (`${styles.todo} ${styles.done}`):styles.todo} >
            <FontAwesomeIcon icon={faThumbtack}  size = "2xl" className={styles.icon}/>
            <p className={styles.textInToDo}>{props.element.text}</p>
            <div className={styles.buttonsDeleteRight}>
            <button onClick={()=>{ props.markDone(props.id) } }><FiCheck /></button>
            <button onClick={() => props.deletePost(props.id) }><FiX /></button>
            </div>
        </div>
    )
}
export default Todo;