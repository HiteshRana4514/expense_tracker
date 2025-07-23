import React from "react";
import {useState} from "react";
import { useEffect } from "react";

function TransactionFilter({transactions,setFilteredTransaction}) {
  const [searchName, setSearchName] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const filteredTransactions = transactions.filter((txn) => {
    const matchName = txn.name.toLowerCase().includes(searchName.toLowerCase());
    const matchCategory = categoryFilter
      ? txn.category === categoryFilter
      : true;
    const matchType = typeFilter ? txn.type === typeFilter : true;
    const matchMin = minAmount ? txn.amount >= parseFloat(minAmount) : true;
    const matchMax = maxAmount ? txn.amount <= parseFloat(maxAmount) : true;
    return matchName && matchCategory && matchType && matchMin && matchMax;
  });

  useEffect(()=>{
    const filteredArr = filteredTransactions
    setFilteredTransaction(filteredArr)
  },[searchName, categoryFilter, typeFilter, minAmount, maxAmount])

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchName(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>

        <select
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <input
          type="number"
          placeholder="Min Am."
          className="w-full md:w-[120px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMinAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Am."
          className="w-full md:w-[120px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMaxAmount(e.target.value)}
        />
      </div>
    </>
  );
}

export default TransactionFilter;
