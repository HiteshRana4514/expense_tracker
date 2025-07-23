import React from "react";

function CategoryAddEdit({name, handleEditCategory, setIsEditing, categoryActionTitle}) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center rounded-xl shadow-lg">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">{categoryActionTitle}</h3>
          <input
            type="text"
            placeholder="Category Name"
            className="border p-2 rounded w-full mb-4"
            value={name}
            onChange={(e) => handleEditCategory(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAddEdit;
