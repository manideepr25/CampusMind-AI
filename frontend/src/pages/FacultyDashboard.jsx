import { useState } from "react";

function FacultyDashboard({ setPage }) {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [selectedQuery, setSelectedQuery] = useState(null);

  const queries = [
    {
      id: 1,
      student: "Rahul Kumar",
      department: "CSE",
      question: "What is the procedure for applying for OD?",
      time: "10 min ago",
      status: "Pending",
    },
    {
      id: 2,
      student: "Priya Sharma",
      department: "AI&DS",
      question:
        "When will the internal exam timetable be released?",
      time: "35 min ago",
      status: "Pending",
    },
    {
      id: 3,
      student: "Arjun Reddy",
      department: "ECE",
      question:
        "How can I contact the examination section?",
      time: "1 hour ago",
      status: "Resolved",
    },
    {
      id: 4,
      student: "Sneha Devi",
      department: "AI&ML",
      question:
        "Where can I find the academic calendar?",
      time: "2 hours ago",
      status: "Resolved",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("campusmind_token");
    localStorage.removeItem("campusmind_user");

    setPage("login");
  };

  const getPageTitle = () => {
    switch (activeMenu) {
      case "dashboard":
        return "Faculty Dashboard";

      case "queries":
        return "Student Queries";

      case "query-details":
        return "Query Details";

      case "college-info":
        return "College Information";

      case "support":
        return "Human Support";

      case "profile":
        return "My Profile";

      default:
        return "Faculty Dashboard";
    }
  };

  const renderContent = () => {
    /* ================================================= */
    /* DASHBOARD */
    /* ================================================= */

    if (activeMenu === "dashboard") {
      return (
        <div className="admin-dashboard-content">

          <div className="page-title">
            <div>
              <h1>Faculty Dashboard</h1>
              <p>
                Manage student queries and college information.
              </p>
            </div>
          </div>

          {/* STAT CARDS */}

          <div className="admin-stats-grid">

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                📩
              </div>

              <div>
                <span>Pending Queries</span>
                <strong>2</strong>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                ✅
              </div>

              <div>
                <span>Resolved Queries</span>
                <strong>2</strong>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                💬
              </div>

              <div>
                <span>Total Queries</span>
                <strong>4</strong>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                🤖
              </div>

              <div>
                <span>AI Assistance</span>
                <strong>Active</strong>
              </div>
            </div>

          </div>

          {/* RECENT QUERIES */}

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>Recent Student Queries</h2>
                <p>
                  Latest questions submitted by students.
                </p>
              </div>

              <button
                className="admin-outline-button"
                onClick={() =>
                  setActiveMenu("queries")
                }
              >
                View All →
              </button>

            </div>

            <div className="admin-table">

              <div className="admin-table-header">
                <span>Student</span>
                <span>Department</span>
                <span>Question</span>
                <span>Time</span>
                <span>Status</span>
              </div>

              {queries.map((query) => (
                <div
                  className="admin-table-row"
                  key={query.id}
                >
                  <span>{query.student}</span>

                  <span>
                    {query.department}
                  </span>

                  <span>
                    {query.question}
                  </span>

                  <span>
                    {query.time}
                  </span>

                  <span>
                    <span
                      className={
                        query.status === "Pending"
                          ? "status-pending"
                          : "status-resolved"
                      }
                    >
                      {query.status}
                    </span>
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* QUICK ACTIONS */}

          <div className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <h2>Quick Actions</h2>
                <p>
                  Frequently used faculty actions.
                </p>
              </div>
            </div>

            <div className="admin-quick-actions">

              <button
                onClick={() =>
                  setActiveMenu("queries")
                }
              >
                <span>📩</span>
                <strong>View Student Queries</strong>
                <small>
                  Review and respond to student questions
                </small>
              </button>

              <button
                onClick={() =>
                  setActiveMenu("college-info")
                }
              >
                <span>🏫</span>
                <strong>College Information</strong>
                <small>
                  View college information
                </small>
              </button>

              <button
                onClick={() =>
                  setActiveMenu("support")
                }
              >
                <span>🆘</span>
                <strong>Human Support</strong>
                <small>
                  Manage support requests
                </small>
              </button>

            </div>

          </div>

        </div>
      );
    }

    /* ================================================= */
    /* STUDENT QUERIES */
    /* ================================================= */

    if (activeMenu === "queries") {
      return (
        <div className="admin-dashboard-content">

          <div className="page-title">
            <div>
              <h1>Student Queries</h1>
              <p>
                Review and respond to student questions.
              </p>
            </div>
          </div>

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>All Student Queries</h2>
                <p>
                  Questions submitted by students.
                </p>
              </div>

            </div>

            <div className="admin-table">

              <div className="admin-table-header">
                <span>Student</span>
                <span>Department</span>
                <span>Question</span>
                <span>Time</span>
                <span>Status</span>
              </div>

              {queries.map((query) => (
                <div
                  className="admin-table-row"
                  key={query.id}
                >

                  <span>
                    {query.student}
                  </span>

                  <span>
                    {query.department}
                  </span>

                  <span>
                    {query.question}
                  </span>

                  <span>
                    {query.time}
                  </span>

                  <span>

                    <button
                      className={
                        query.status === "Pending"
                          ? "status-pending"
                          : "status-resolved"
                      }
                      onClick={() => {
                        setSelectedQuery(query);
                        setActiveMenu(
                          "query-details"
                        );
                      }}
                    >
                      {query.status}
                    </button>

                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      );
    }

    /* ================================================= */
    /* QUERY DETAILS */
    /* ================================================= */

    if (activeMenu === "query-details") {
      return (
        <div className="admin-dashboard-content">

          <div className="page-title">

            <div>
              <h1>Query Details</h1>
              <p>
                Review the selected student query.
              </p>
            </div>

            <button
              className="admin-outline-button"
              onClick={() =>
                setActiveMenu("queries")
              }
            >
              ← Back to Queries
            </button>

          </div>

          <div className="admin-panel">

            {selectedQuery ? (
              <>
                <div className="query-detail-card">

                  <div className="query-detail-header">

                    <div className="query-student-avatar">
                      {selectedQuery.student
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h2>
                        {selectedQuery.student}
                      </h2>

                      <p>
                        {selectedQuery.department}
                      </p>
                    </div>

                  </div>

                  <div className="query-detail-content">

                    <div>
                      <span>Question</span>

                      <p>
                        {selectedQuery.question}
                      </p>
                    </div>

                    <div>
                      <span>Submitted</span>

                      <p>
                        {selectedQuery.time}
                      </p>
                    </div>

                    <div>
                      <span>Status</span>

                      <p>
                        {selectedQuery.status}
                      </p>
                    </div>

                  </div>

                </div>

                <div className="faculty-response-box">

                  <h3>
                    Faculty Response
                  </h3>

                  <textarea
                    rows="6"
                    placeholder="Type your response to the student..."
                  />

                  <button
                    className="primary-button"
                    onClick={() =>
                      alert(
                        "Response feature will be connected to the backend soon."
                      )
                    }
                  >
                    Send Response →
                  </button>

                </div>
              </>
            ) : (
              <div className="empty-state">
                <div>📩</div>

                <h3>
                  No Query Selected
                </h3>

                <p>
                  Select a query from the student
                  queries section.
                </p>
              </div>
            )}

          </div>

        </div>
      );
    }

    /* ================================================= */
    /* COLLEGE INFORMATION */
    /* ================================================= */

    if (activeMenu === "college-info") {
      return (
        <div className="admin-dashboard-content">

          <div className="page-title">

            <div>
              <h1>College Information</h1>

              <p>
                View important college information.
              </p>
            </div>

          </div>

          <div className="college-info-grid">

            <div className="college-info-card">
              <div className="college-info-icon">
                🎓
              </div>

              <h3>
                Courses & Programs
              </h3>

              <p>
                View information about B.Tech
                programs and departments.
              </p>
            </div>

            <div className="college-info-card">
              <div className="college-info-icon">
                📝
              </div>

              <h3>
                Admissions
              </h3>

              <p>
                View admission procedures,
                eligibility and requirements.
              </p>
            </div>

            <div className="college-info-card">
              <div className="college-info-icon">
                💰
              </div>

              <h3>
                Fees
              </h3>

              <p>
                View tuition and other college
                related fees.
              </p>
            </div>

            <div className="college-info-card">
              <div className="college-info-icon">
                🏢
              </div>

              <h3>
                Facilities
              </h3>

              <p>
                Explore classrooms, laboratories,
                library and other facilities.
              </p>
            </div>

            <div className="college-info-card">
              <div className="college-info-icon">
                📅
              </div>

              <h3>
                Events & Calendar
              </h3>

              <p>
                View important academic events
                and dates.
              </p>
            </div>

            <div className="college-info-card">
              <div className="college-info-icon">
                🤖
              </div>

              <h3>
                AI Knowledge Base
              </h3>

              <p>
                Information used by CampusMind AI
                for answering student questions.
              </p>
            </div>

          </div>

        </div>
      );
    }

    /* ================================================= */
    /* HUMAN SUPPORT */
    /* ================================================= */

    if (activeMenu === "support") {
      return (
        <div className="admin-dashboard-content">

          <div className="page-title">

            <div>
              <h1>Human Support</h1>

              <p>
                Manage student support requests.
              </p>
            </div>

          </div>

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>
                  Support Requests
                </h2>

                <p>
                  Student queries that require
                  human assistance.
                </p>
              </div>

            </div>

            <div className="support-request-list">

              <div className="support-request-item">

                <div className="support-request-avatar">
                  R
                </div>

                <div className="support-request-content">

                  <h3>
                    Rahul Kumar
                  </h3>

                  <p>
                    Need clarification regarding
                    OD application process.
                  </p>

                  <small>
                    CSE • 10 minutes ago
                  </small>

                </div>

                <button
                  className="primary-button"
                  onClick={() =>
                    alert(
                      "Support response feature will be connected to the backend soon."
                    )
                  }
                >
                  Respond
                </button>

              </div>

              <div className="support-request-item">

                <div className="support-request-avatar">
                  P
                </div>

                <div className="support-request-content">

                  <h3>
                    Priya Sharma
                  </h3>

                  <p>
                    Requesting information about
                    internal examination schedule.
                  </p>

                  <small>
                    AI&DS • 35 minutes ago
                  </small>

                </div>

                <button
                  className="primary-button"
                  onClick={() =>
                    alert(
                      "Support response feature will be connected to the backend soon."
                    )
                  }
                >
                  Respond
                </button>

              </div>

            </div>

          </div>

        </div>
      );
    }

    /* ================================================= */
    /* PROFILE */
    /* ================================================= */

    if (activeMenu === "profile") {

      const user = JSON.parse(
        localStorage.getItem(
          "campusmind_user"
        ) || "{}"
      );

      return (
        <div className="admin-dashboard-content">

          <div className="page-title">

            <div>
              <h1>My Profile</h1>

              <p>
                View your faculty account information.
              </p>
            </div>

          </div>

          <div className="profile-layout">

            <div className="profile-card profile-summary">

              <div className="profile-avatar">
                {user.name
                  ? user.name
                      .charAt(0)
                      .toUpperCase()
                  : "F"}
              </div>

              <h2>
                {user.name ||
                  "Faculty Member"}
              </h2>

              <p>
                {user.email ||
                  "Faculty Account"}
              </p>

              <span className="profile-role">
                👨‍🏫 Faculty
              </span>

            </div>

            <div className="profile-card profile-details">

              <h2>
                Account Information
              </h2>

              <div className="profile-detail">

                <span>
                  Name
                </span>

                <strong>
                  {user.name ||
                    "Faculty Member"}
                </strong>

              </div>

              <div className="profile-detail">

                <span>
                  Email
                </span>

                <strong>
                  {user.email ||
                    "Not available"}
                </strong>

              </div>

              <div className="profile-detail">

                <span>
                  Role
                </span>

                <strong>
                  Faculty
                </strong>

              </div>

              <div className="profile-detail">

                <span>
                  Account Status
                </span>

                <strong className="profile-status">
                  ● Active
                </strong>

              </div>

            </div>

          </div>

        </div>
      );
    }

    return null;
  };

  return (
    <div className="admin-layout">

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside className="admin-sidebar">

        <div className="admin-sidebar-brand">

          <div className="brand-icon">
            🧠
          </div>

          <div>
            <h2>
              CampusMind AI
            </h2>

            <span>
              Faculty Portal
            </span>
          </div>

        </div>

        <div className="admin-sidebar-menu">

          <p className="admin-menu-label">
            MAIN MENU
          </p>

          <button
            className={
              activeMenu === "dashboard"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("dashboard")
            }
          >
            <span>📊</span>
            Dashboard
          </button>

          <button
            className={
              activeMenu === "queries" ||
              activeMenu === "query-details"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("queries")
            }
          >
            <span>📩</span>
            Student Queries
          </button>

          <button
            className={
              activeMenu === "college-info"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("college-info")
            }
          >
            <span>🏫</span>
            College Information
          </button>

          <button
            className={
              activeMenu === "support"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("support")
            }
          >
            <span>🆘</span>
            Human Support
          </button>

          <p className="admin-menu-label">
            ACCOUNT
          </p>

          <button
            className={
              activeMenu === "profile"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("profile")
            }
          >
            <span>👤</span>
            My Profile
          </button>

        </div>

        <div className="admin-sidebar-bottom">

          <button
            className="admin-menu-item logout-item"
            onClick={handleLogout}
          >
            <span>🚪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* ================================================= */}
      {/* MAIN AREA */}
      {/* ================================================= */}

      <main className="admin-main">

        <header className="admin-topbar">

          <div>

            <h2>
              {getPageTitle()}
            </h2>

          </div>

          <div className="admin-topbar-right">

            <div className="admin-notification">
              🔔
            </div>

            <div className="admin-user">

              <div className="admin-user-avatar">
                F
              </div>

              <div>

                <strong>
                  Faculty
                </strong>

                <span>
                  Faculty Member
                </span>

              </div>

            </div>

          </div>

        </header>

        <section className="admin-content">
          {renderContent()}
        </section>

      </main>

    </div>
  );
}

export default FacultyDashboard;