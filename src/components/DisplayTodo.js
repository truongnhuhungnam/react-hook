const DisplayTodo = ({ listTodo, handleDeleteTodo }) => {
    return (
        <div className="mt-6">
            <h3 className="text-2xl">List to do</h3>
            <ul className="mt-8">
                {listTodo.map((item, index) => (
                    <li key={item.id} onClick={() => handleDeleteTodo(item.id)} className="border-b border-black">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayTodo;
