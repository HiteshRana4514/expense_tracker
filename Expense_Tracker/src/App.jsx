import { useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DashboardContent from "./pages/dashboardContent/DashboardContent";
import Transaction from "./pages/dashboardContent/Transction";
import Help from "./pages/dashboardContent/Help";
import Reports from "./pages/dashboardContent/Reports";
import Settings from "./pages/dashboardContent/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
        <Routes>
           <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="help" element={<Help />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
