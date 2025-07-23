import React from "react";
import ExpencesCard from "../../components/ExpencesCard";
import QuickActions from "../../components/QuickActions";
import ChartLine from "../../components/ChartLine";
import { useRef, useState, useEffect } from "react";
import RecentTranscation from "../../components/RecentTranscation";
import PieChartComp from "../../components/PieChart";
import ManageCategory from "../../components/ManageCategory";
import AddExpense from "../../components/AddExpense";
import AddIncome from "../../components/AddIncome";
// Expence_cards data
const cardData = [
  {
    title: "🏦 Total Balance",
    value: "$5000",
    color: "#AFEEEE ",
  },
  {
    title: "💵 Income",
    value: "$5000",
    color: "#c2e59c",
  },
  {
    title: "🧾 Expenses",
    value: "$5000",
    color: "#FFA07A",
  },
  {
    title: "🗓️ This Month ",
    value: "$5000",
    color: "#ADD8E6",
  },
];

const quickActions = [
  {
    title: "➕ Add Income",
    icon: "💰",
  },
  { title: "➕ Add Expense", icon: "🧾" },
  { title: "Manage Categories", icon: "📁" },
  { title: "Download Reports", icon: "📤" },
];

function DashboardContent() {
  const [boxSize, setBoxSize] = useState({ width: 300, height: 300 });
  const boxRef = useRef(null);
  const [categorypopup, setCategoryPopup] = useState(false);
  const [expensePopup, setExpensePopup] = useState(false);
  const [incomePopup, setIncomePopup] = useState(false);


  useEffect(()=>{
    document.body.style.overflow = categorypopup || expensePopup || incomePopup ? 'hidden' : 'auto';
  },[categorypopup, expensePopup, incomePopup]);

  useEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
    }

    const handleResize = () => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="p-4 bg-[#F5F9FF] shadow-xl min-h-full w-full overflow-y-auto rounded-xl">
        <h2 className="text-2xl text-[#2C3E50] font-bold mb-6">
          Dashboard Overview
        </h2>
        <div className="h-[79vh] overflow-y-auto scroll-smooth">
          <div className="justify-between gap-4 md:flex mb-4 md:mb-8">
            {cardData.map((card, index) => {
              return (
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <ExpencesCard
                    key={index}
                    title={card.title}
                    value={card.value}
                    color={card.color}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex p-4 bg-[#007BFF] rounded-xl justify-between md:gap-4 flex-wrap md:flex-nowrap gap-1 mb-8">
            {quickActions.map((action, index) => {
              return (
                <div
                  className="w-[48%] md:w-1/4 mb-4 md:mb-0"
                  onClick={() => {
                    if (action.title === "Manage Categories") {
                      console.log("Manage Categories clicked");

                      setCategoryPopup(true);
                    }
                    if (action.title === "➕ Add Expense") {
                      console.log("Add Expense clicked");
                      setExpensePopup(true);
                    }
                    if (action.title === "➕ Add Income") {
                      console.log("Add Income clicked");
                      setIncomePopup(true);
                    }
                    if (action.title === "Download Reports") {
                      console.log("Download Reports clicked");
                    }
                  }}
                >
                  <QuickActions
                    key={index}
                    title={action.title}
                    icon={action.icon}
                  />
                </div>
              );
            })}
          </div>
          <div className="md:flex justify-between gap-4 mb-8">
            <div
              className="md:w-1/2 w-full h-[300px] md:h-[400px] lg:h-[400px] mb-6 md:mb-0"
              ref={boxRef}
            >
              <ChartLine boxSize={boxSize} />
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[400px]">
              <PieChartComp />
            </div>
          </div>
          <div className="rounded-xl mb-8">
            <RecentTranscation action={false} />
          </div>
        </div>
      </div>
      {categorypopup && <ManageCategory setCategoryPopup={setCategoryPopup} />}
      {expensePopup && <AddExpense setExpensePopup={setExpensePopup} />}
      {incomePopup && <AddIncome setIncomePopup={setIncomePopup} />}
    </>
  );
}

export default DashboardContent;
