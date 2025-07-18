import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/LibraryHome/LibraryHome";
import SuperAdminDashboard from "./Pages/Dashboard/SuperAdminDashboard";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import UserDashboard from "./Pages/Dashboard/UserDashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import LibraryCatalogue from "./Pages/LibraryCatalogue";
import LibraryExams from "./Pages/LibraryExams";

export default function App() {
  return (
    <div className="text-dark font-primary h-screen 1000px:max-w-[90%] w-full mx-auto max-1000px:px-2 max-600px:px-0  ">
      <Routes>
        {/* __ HOME __ */}
        <Route path="/" element={<Navigate to="/library" replace />} />
        <Route path="/library" element={<Home />}>
          <Route path="catalog" element={<LibraryCatalogue />} />
          <Route path="exam-bank" element={<LibraryExams />} />
        </Route>
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
