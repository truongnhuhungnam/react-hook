import { useState } from "react";

const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const handleClickBtn = () => {
        let object = {
            name,
            price,
            size,
            color,
        };
        console.log(object);
    };

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail);
    };

    const [isShowDetail, setIsShowDetail] = useState(false);

    return (
        <div className="basis-1/3">
            {isShowDetail === true && (
                <div className="bg-gray-200 p-4">
                    <h3 className="text-xl">Add New A Product</h3>
                    <label className="block mt-5">
                        <span className="text-gray-700">Name</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </label>
                    <label className="block mt-5">
                        <span className="text-gray-700">Price</span>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </label>
                    <label className="block mt-5">
                        <span className="text-gray-700">Size</span>
                        <input
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </label>
                    <label className="block mt-5">
                        <span className="text-gray-700">Color</span>
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </label>
                    <button
                        onClick={() => handleClickBtn()}
                        className="bg-black w-1/3 mx-auto block border border-black text-white px-6 py-2 mt-12 hover:bg-white hover:text-black"
                    >
                        Add
                    </button>
                </div>
            )}

            <button
                onClick={() => {
                    handleHideShow();
                }}
                className="bg-black w-1/4 border border-black text-white px-6 py-2 mt-4 hover:bg-white hover:text-black"
            >
                {isShowDetail ? "Hide form" : "Show form"}
            </button>
        </div>
    );
};

export default AddNewProduct;
