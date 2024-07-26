import ButtonsDelete from "./ButtonsDelete";
import styles from "./ButtonsPanel.module.css";
import { FiRefreshCw } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";


function ButtonsPanel({functionDeleteAllTodosHandler,functionDeleteAllDoneTodosHandler}){
    return(
        <div className={styles.buttonsPanel}>
    <ButtonsDelete function = {functionDeleteAllTodosHandler} ><FiRefreshCw/></ButtonsDelete>
    <ButtonsDelete  function = {functionDeleteAllDoneTodosHandler}><FiTrash2 /></ButtonsDelete>
       </div>
    )

}
export default ButtonsPanel;
