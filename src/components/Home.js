import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState([
        { id: uuidv4(), name: "Todo 1" },
        { id: uuidv4(), name: "Todo 2" },
        { id: uuidv4(), name: "Todo 3" },
        { id: uuidv4(), name: "Todo 4" },
    ]);
    const handleAddTodo = () => {
        if (!todo) {
            alert("Please enter todo name...");
            return;
        }
        let todoItem = {
            id: uuidv4(),
            name: todo,
        };
        setListTodo([...listTodo, todoItem]);
        setTodo("");
    };
    const handleDeleteTodo = (id) => {
        const deletedTodo = listTodo.filter((item) => item.id !== id);
        setListTodo(deletedTodo);
    };

    return (
        <div className="basis-3/4 max-w-xl mx-auto">
            <AddTodo
                handleAddTodo={handleAddTodo}
                setTodo={setTodo}
                todo={todo}
            />

            <DisplayTodo
                listTodo={listTodo}
                handleDeleteTodo={handleDeleteTodo}
            />
        </div>
    );
};

export default Home;
