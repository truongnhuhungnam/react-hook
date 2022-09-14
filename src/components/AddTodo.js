import React from "react";

const AddTodo = ({ handleAddTodo, setTodo, todo }) => {
    return (
        <div className="flex items-end">
            <label className="block">
                <span class="text-gray-700">Full name</span>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    className="mt-1 block w-full"
                />
            </label>
            <button
                onClick={() => handleAddTodo()}
                className="bg-black text-white px-6 py-2 ml-2 hover:bg-white hover:text-black hover:border hover:border-black"
            >
                Submit
            </button>
        </div>
    );
};

export default AddTodo;
