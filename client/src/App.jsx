import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SuperAdminDashboard from "./Pages/Dashboard/SuperAdminDashboard";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import UserDashboard from "./Pages/Dashboard/UserDashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

export default function App() {
  return (
    <div className="text-dark font-primary h-screen">
      <Routes>
        {/* __ HOME __ */}
        <Route path="/" element={<Home />} />
        {/*__USER DASHBOARD__ */}
        <Route path="/dashboard/user" element={<UserDashboard />} />
        {/* __ADMIN DASHBOARD */}
        <Route path="/dashboard/librarian" element={<AdminDashboard />} />
        {/* __SUPER ADMIN DASHBOARD__ */}
        <Route path="/dashboard/manager" element={<SuperAdminDashboard />} />

        {/* __ AUTH __ */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      </Routes>


     
    </div>
  );
}
