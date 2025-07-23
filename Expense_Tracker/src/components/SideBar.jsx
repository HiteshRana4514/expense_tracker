import React from "react";
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileChartColumn,
  Settings,
  MessageCircleQuestionMark,
} from "lucide-react";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";
function SideBar({ setShowMenu }) {
  return (
    <>
      <div
        className="flex flex-col space-y-4 mb-4"
        onClick={(e) => {
          if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.tagName === "SVG") {
            setShowMenu(false);
          }
        }}
      >
        <button className="p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] text-[#FFFFFF] transition duration-300 cursor-pointer flex items-center space-x-2 ">
          <Link className="flex items-center w-full flex-col" to="/dashboard">
            <LayoutDashboard className="mb-2" />
            Dashboard
          </Link>
        </button>
        <button className="p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] text-[#FFFFFF] transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
          <Link className="flex items-center w-full flex-col" to="transaction">
            <ArrowLeftRight className="mb-2" />
            Transactions
          </Link>
        </button>
        <button className="p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] text-[#FFFFFF] transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
          <Link className="flex items-center w-full flex-col" to="reports">
            <FileChartColumn className="mb-2" />
            Reports
          </Link>
        </button>
        <button className="p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] text-[#FFFFFF] transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
          <Link className="flex items-center w-full flex-col" to="settings">
            <Settings className="mb-2" />
            Settings
          </Link>
        </button>
        <button className="p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] text-[#FFFFFF] transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
          <Link className="flex items-center w-full flex-col" to="help">
            <MessageCircleQuestionMark className="mb-2" />
            Help & Support
          </Link>
        </button>
      </div>
      {/* <div className="mt-auto p-2 bg-[#007BFF] rounded-lg hover:bg-[#5BC0EB] transition duration-300">
            <button className="w-full text-center">
                Logout
            </button>
        </div> */}
    </>
  );
}

export default SideBar;
