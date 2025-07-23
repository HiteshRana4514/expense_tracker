import React from "react";
import TransactionFilter from "./TransactionFilter";
import { useState } from "react";
const transactions = [
  {
    id: 1,
    name: "Groceries",
    amount: 45.99,
    date: "2025-07-15",
    category: "Food",
    type: "Expense",
  },
  {
    id: 2,
    name: "Uber Ride",
    amount: 120.5,
    date: "2025-07-14",
    category: "Transport",
    type: "Expense",
  },
  {
    id: 3,
    name: "Freelance Payment",
    amount: 850.0,
    date: "2025-07-13",
    category: "Income",
    type: "Income",
  },
  {
    id: 4,
    name: "Electricity Bill",
    amount: 60.75,
    date: "2025-07-12",
    category: "Utilities",
    type: "Expense",
  },
  {
    id: 5,
    name: "Movie Night",
    amount: 25.0,
    date: "2025-07-10",
    category: "Entertainment",
    type: "Expense",
  },
];

function RecentTranscation({ action }) {
  const [filteredTransactions, setFilteredTransaction] = useState(transactions);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md h-full">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="text-lg text-[#2C3E50] font-bold mb-4">
          {action ? "Transactions" : "Recent Transactions"}
        </h3>
        {action && (
          <button
            type="button"
            className="p-4 block bg-[#007BFF] text-white rounded-xl cursor-pointer hover:bg-[#5BC0EB] transition duration-300"
          >
            ➕ Add Transaction
          </button>
        )}
      </div>
      {action && (
        <TransactionFilter
          transactions={transactions}
          setFilteredTransaction={setFilteredTransaction}
        />
      )}
      <div className="overflow-x-auto w-full">
        {filteredTransactions.length > 0 ? (
          <table className="min-w-[700px] w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Type</th>
                <th className={`py-2 px-4 ${action ? "" : "text-right"}`}>
                  Amount ($)
                </th>
                {action && <th className="py-2 px-4 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{txn.date}</td>
                  <td className="py-2 px-4">{txn.name}</td>
                  <td className="py-2 px-4">{txn.category}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        txn.type === "Income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {txn.type}
                    </span>
                  </td>
                  <td
                    className={`py-2 px-4 font-medium ${
                      action ? "" : "text-right"
                    }`}
                  >
                    ${txn.amount.toFixed(2)}
                  </td>
                  {action && (
                    <td className="py-2 px-4 text-right flex gap-4 justify-end">
                      <span className="block py-1 px-2 text-sm text-white rounded-md bg-[#007BFF] cursor-pointer">
                        Edit
                      </span>
                      <span className="block py-1 px-2 text-sm text-white rounded-md bg-[#FFA07A] cursor-pointer">
                        Delete
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col justify-center items-center p-4">
            <span className="text-xl text-[#2C3E50] font-bold mb-4">
              No Transaction found
            </span>
            {/* <button type="button" className="p-4 block bg-[#007BFF] text-white rounded-xl cursor-pointer hover:bg-[#5BC0EB] transition duration-300">➕ Add Transaction</button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentTranscation;
