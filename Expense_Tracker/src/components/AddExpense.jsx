import React from "react";

function AddExpense({ setExpensePopup }) {
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center bg-black/60 w-full h-screen p-4 z-50">
        <div className="w-full max-w-[600px] bg-white rounded-xl shadow-lg p-6 relative">
          <h2 className="text-xl font-semibold text-center mb-6">
            Add Transaction
          </h2>

          <div className="mb-4">
            <label
              htmlFor="trasc-name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="trasc-name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
              placeholder="Enter transaction name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="trasc-category"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="trasc-category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="trasc-amount"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="trasc-amount"
              name="amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-4 py-2 rounded-md bg-[#525846] text-white hover:bg-opacity-90 transition cursor-pointer"
              onClick={() => setExpensePopup(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md bg-[#966b52] text-white hover:bg-opacity-90 transition cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
