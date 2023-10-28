import btnDone from "../../assets/btnDone.svg";
import btnDelete from "../../assets/btnClose.svg";
import styles from "./Todo.module.css";

export default function TodoList({ todos, onDelete, onComplete }) {
    return (
        <div className={styles.todoLists}>
            {todos.map((todo) => {
                return (
                    <div className={styles.todoItem} key={todo.id}>
                        <span
                            className={
                                todo.isComplete
                                    ? styles.taskText + " " + styles.complete
                                    : styles.taskText
                            }
                        >
                            {todo.todo}
                        </span>
                        <div className={styles.btnContainer}>
                            <button
                                className={styles.taskBtnDone}
                                onClick={() => onComplete(todo)}
                            >
                                <img src={btnDone} alt="done" />
                            </button>

                            <button
                                className={styles.taskBtnDelete}
                                onClick={() => onDelete(todo)}
                            >
                                <img src={btnDelete} alt="delete" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
