import { useState } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FacultyRegisterPage from "./pages/FacultyRegisterPage";

import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [page, setPage] = useState("home");
  const [loginRole, setLoginRole] = useState("student");

  return (
    <div className="app">

      {/* ================================================= */}
      {/* LANDING PAGE */}
      {/* ================================================= */}

      {page === "home" && (
        <LandingPage setPage={setPage} />
      )}

      {/* ================================================= */}
      {/* LOGIN PAGE */}
      {/* ================================================= */}

      {page === "login" && (
        <LoginPage
          setPage={setPage}
          loginRole={loginRole}
          setLoginRole={setLoginRole}
        />
      )}

      {/* ================================================= */}
      {/* STUDENT REGISTRATION */}
      {/* ================================================= */}

      {page === "student-register" && (
        <RegisterPage setPage={setPage} />
      )}

      {/* ================================================= */}
      {/* FACULTY REGISTRATION */}
      {/* ================================================= */}

      {page === "faculty-register" && (
        <FacultyRegisterPage setPage={setPage} />
      )}

      {/* ================================================= */}
      {/* STUDENT DASHBOARD */}
      {/* ================================================= */}

      {page === "student-dashboard" && (
        <StudentDashboard setPage={setPage} />
      )}

      {/* ================================================= */}
      {/* FACULTY DASHBOARD */}
      {/* ================================================= */}

      {page === "faculty-dashboard" && (
        <FacultyDashboard setPage={setPage} />
      )}

      {/* ================================================= */}
      {/* ADMIN DASHBOARD */}
      {/* ================================================= */}

      {page === "admin-dashboard" && (
        <AdminDashboard setPage={setPage} />
      )}

    </div>
  );
}

export default App;