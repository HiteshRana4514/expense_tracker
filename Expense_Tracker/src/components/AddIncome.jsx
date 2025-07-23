import React from "react";

function AddIncome({ setIncomePopup }) {
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center bg-black/60 w-full h-screen p-4 z-50">
        <div className="w-full max-w-[600px] bg-white rounded-xl shadow-lg p-6 relative">
          <h2 className="text-xl font-semibold text-center mb-6">Add Income</h2>
          <div className="mb-4">
            <label
              htmlFor="income-name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="income-name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
              placeholder="Enter income name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="income-category"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="income-category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
            >
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Freelance">Freelance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="income-amount"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="income-amount"
              name="amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="income-date"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="income-date"
              name="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#966b52]"
            />
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-4 py-2 rounded-md bg-[#525846] text-white hover:bg-opacity-90 transition cursor-pointer"
              onClick={() => setIncomePopup(false)}
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

export default AddIncome;
