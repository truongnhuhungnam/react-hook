const AddNewProduct = () => {
    return (
        <div className="basis-1/3 p-4 bg-gray-300">
            <h3 className="text-xl">Add New A Product</h3>
            <label className="block mt-5">
                <span class="text-gray-700">Name</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block mt-5">
                <span class="text-gray-700">Price</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block mt-5">
                <span class="text-gray-700">Size</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block mt-5">
                <span class="text-gray-700">Color</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <button className="bg-black w-1/3 mx-auto block border border-black text-white px-6 py-2 mt-12 hover:bg-white hover:text-black ">
                Add
            </button>
        </div>
    );
};

export default AddNewProduct;
