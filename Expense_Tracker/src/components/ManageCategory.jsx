import React from "react";
import { X } from "lucide-react";
import { useState } from "react";
import CategoryAddEdit from "./CategoryAddEdit";
const category = [
  { id: 1, name: "Food", type: "Expense" },
  { id: 2, name: "Transport", type: "Expense" },
  { id: 4, name: "Utilities", type: "Expense" },
  { id: 5, name: "Entertainment", type: "Expense" },
];

function ManageCategory({ setCategoryPopup }) {
  const [isEditing, setIsEditing] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryActionTitle, setCategoryActionTitle] =
    useState("Add Category");

  const handleEditCategory = (newName) => {
    setCategoryName(newName);
  };
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center bg-black/60 w-full h-screen p-4">
        <div className="p-4 w-full max-w-[600px] bg-white relative rounded-xl shadow-lg pt-8 max-h-[80vh] overflow-y-auto">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"
            onClick={() => setCategoryPopup(false)}
          >
            <X />
          </button>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
            <div className="p-4 rounded-xl h-full flex items-center justify-between cursor-pointer">
              <span
                className="text-sm block text-gray-800 font-bold"
                onClick={() => {
                  setIsEditing(true);
                  setCategoryName("");
                  setCategoryActionTitle("Add Category");
                }}
              >
                ➕ Add Category
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {category.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
              >
                <span className="text-lg">{cat.name}</span>
                <span className="text-sm text-gray-500 flex gap-2 items-center">
                  <span
                    className="block py-1 px-2 text-sm text-white rounded-md bg-[#007BFF] cursor-pointer"
                    onClick={() => {
                      setIsEditing(true);
                      setCategoryName(cat.name);
                      setCategoryActionTitle("Edit Category");
                    }}
                  >
                    Edit
                  </span>
                  <span className="block py-1 px-2 text-sm text-white rounded-md bg-[#FFA07A] cursor-pointer">
                    Delete
                  </span>
                </span>
                {isEditing && (
                  <CategoryAddEdit
                    name={categoryName}
                    handleEditCategory={handleEditCategory}
                    setIsEditing={setIsEditing}
                    categoryActionTitle={categoryActionTitle}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCategory;
