import { useState } from "react";

import TodoList from "./TodoList";

import btnAdd from "../../assets/btnadd.svg";
import styles from "./Todo.module.css";

export default function Todo() {
    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [todos, setTodos] = useState([]);

    // input's newtodo
    function inputChangeHandler(event) {
        setNewTodo(event.target.value);
        setSearchTerm(event.target.value);
    }

    // add new todo
    function addNewTodo(event) {
        event.preventDefault();
        if (!newTodo) return;
        setTodos((prevTodos) => {
            return [
                {
                    todo: newTodo,
                    id: Math.random().toString(),
                    isComplete: false,
                },
                ...prevTodos,
            ];
        });

        setNewTodo("");
        setSearchTerm("");
    }

    // delete
    function deleteTaskHandler(clickedTask) {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== clickedTask.id);
        });
    }

    // complete handler
    function taskCompleteHandler(clickedTask) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === clickedTask.id) {
                    return { ...todo, isComplete: true };
                }
                return todo;
            });
        });
    }

    const filteredTodos = todos.filter((todo) => {
        return todo.todo.includes(searchTerm);
    });

    return (
        <section className={styles.todo}>
            <form className={styles.form} onSubmit={addNewTodo}>
                <input
                    type="text"
                    placeholder="Add New Todo"
                    value={newTodo}
                    onChange={inputChangeHandler}
                    autoFocus
                />
                <button type="submit">
                    <img src={btnAdd} alt="add button" />
                </button>
            </form>

            {filteredTodos.length >= 1 ? (
                <TodoList
                    todos={filteredTodos}
                    onDelete={deleteTaskHandler}
                    onComplete={taskCompleteHandler}
                />
            ) : (
                <h3 style={{ color: "#085580", textAlign: "center" }}>
                    <TodoList
                        todos={todos}
                        onDelete={deleteTaskHandler}
                        onComplete={taskCompleteHandler}
                    />
                </h3>
            )}
        </section>
    );
}
