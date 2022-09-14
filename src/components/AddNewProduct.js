const AddNewProduct = () => {
    return (
        <div className="basis-1/4 p-4 bg-gray-300">
            <h3 className="text-xl">Add New A Product</h3>
            <label className="block">
                <span class="text-gray-700">Name</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block">
                <span class="text-gray-700">Price</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block">
                <span class="text-gray-700">Size</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block">
                <span class="text-gray-700">Color</span>
                <input type="text" className="mt-1 block w-full" />
            </label>
        </div>
    );
};

export default AddNewProduct;
