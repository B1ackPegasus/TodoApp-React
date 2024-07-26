
import styles from "./ButtonsDelete.module.css";
function ButtonsDelete(props){
    return(
    <button
        onClick={()=>props.function()}
        className={styles.buttonDeleteAll}
    >{props.children}
    </button>
    )
}
export default ButtonsDelete;