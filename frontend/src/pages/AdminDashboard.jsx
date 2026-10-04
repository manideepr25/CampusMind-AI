import { useState } from "react";

function AdminDashboard({ setPage }) {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "College Information",
      type: "TXT",
      size: "12 KB",
      chunks: 12,
      status: "Processed",
      date: "Today",
    },
    {
      id: 2,
      name: "Academic Information",
      type: "PDF",
      size: "245 KB",
      chunks: 38,
      status: "Processed",
      date: "Yesterday",
    },
    {
      id: 3,
      name: "Facilities Information",
      type: "PDF",
      size: "180 KB",
      chunks: 24,
      status: "Processed",
      date: "2 days ago",
    },
    {
      id: 4,
      name: "Academic Calendar",
      type: "PDF",
      size: "95 KB",
      chunks: 16,
      status: "Processed",
      date: "3 days ago",
    },
  ]);

  const users = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Ramesh Kumar",
      email: "ramesh@example.com",
      role: "Faculty",
      status: "Active",
    },
    {
      id: 4,
      name: "Admin User",
      email: "admin@campusmind.ai",
      role: "Admin",
      status: "Active",
    },
  ];

  const queries = [
    {
      id: 1,
      student: "Rahul Kumar",
      question: "What is the procedure for applying for OD?",
      category: "Academic",
      status: "Pending",
      time: "10 min ago",
    },
    {
      id: 2,
      student: "Priya Sharma",
      question: "When will the internal exam timetable be released?",
      category: "Examination",
      status: "Pending",
      time: "35 min ago",
    },
    {
      id: 3,
      student: "Arjun Reddy",
      question: "How can I contact the examination section?",
      category: "Examination",
      status: "Resolved",
      time: "1 hour ago",
    },
    {
      id: 4,
      student: "Sneha Devi",
      question: "Where can I find the academic calendar?",
      category: "Academic",
      status: "Resolved",
      time: "2 hours ago",
    },
  ];

  const escalations = [
    {
      id: 1,
      student: "Rahul Kumar",
      subject: "OD Application",
      priority: "High",
      status: "Waiting for Faculty",
      time: "10 min ago",
    },
    {
      id: 2,
      student: "Priya Sharma",
      subject: "Internal Examination",
      priority: "Medium",
      status: "Assigned",
      time: "35 min ago",
    },
  ];

  const deleteDocument = (id) => {
    setDocuments((previousDocuments) =>
      previousDocuments.filter(
        (document) => document.id !== id
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("campusmind_token");
    localStorage.removeItem("campusmind_user");

    setPage("login");
  };

  const getPageTitle = () => {
    switch (activeMenu) {
      case "dashboard":
        return "Admin Dashboard";

      case "users":
        return "User Management";

      case "documents":
        return "Document Management";

      case "queries":
        return "Query Monitoring";

      case "support":
        return "Human Support";

      case "analytics":
        return "Analytics";

      case "profile":
        return "Admin Profile";

      default:
        return "Admin Dashboard";
    }
  };

  const renderDashboard = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">
          <div>
            <h1>Admin Dashboard</h1>
            <p>
              Monitor and manage the CampusMind AI system.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* STATISTICS */}
        {/* ================================================= */}

        <div className="admin-stats-grid">

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              👥
            </div>

            <div>
              <span>Total Users</span>
              <strong>186</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              📚
            </div>

            <div>
              <span>Documents</span>
              <strong>{documents.length}</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              💬
            </div>

            <div>
              <span>Total Queries</span>
              <strong>428</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              🤖
            </div>

            <div>
              <span>RAG Status</span>
              <strong>Active</strong>
            </div>
          </div>

        </div>

        {/* ================================================= */}
        {/* RECENT ACTIVITY */}
        {/* ================================================= */}

        <div className="admin-dashboard-grid">

          <div className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <h2>Recent Activity</h2>
                <p>
                  Latest system activities.
                </p>
              </div>
            </div>

            <div className="admin-activity-list">

              <div className="admin-activity-item">
                <span>👤</span>

                <div>
                  <strong>
                    New student registered
                  </strong>

                  <small>
                    Rahul Kumar • 10 minutes ago
                  </small>
                </div>
              </div>

              <div className="admin-activity-item">
                <span>📩</span>

                <div>
                  <strong>
                    New student query received
                  </strong>

                  <small>
                    Priya Sharma • 35 minutes ago
                  </small>
                </div>
              </div>

              <div className="admin-activity-item">
                <span>📄</span>

                <div>
                  <strong>
                    Academic Calendar processed
                  </strong>

                  <small>
                    Document Management • 3 days ago
                  </small>
                </div>
              </div>

              <div className="admin-activity-item">
                <span>🤖</span>

                <div>
                  <strong>
                    RAG system is active
                  </strong>

                  <small>
                    CampusMind AI • Today
                  </small>
                </div>
              </div>

            </div>

          </div>

          {/* PERFORMANCE */}

          <div className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <h2>System Performance</h2>
                <p>
                  Current CampusMind AI status.
                </p>
              </div>
            </div>

            <div className="admin-performance">

              <div className="admin-progress-item">

                <div>
                  <span>
                    RAG Search
                  </span>

                  <strong>
                    96%
                  </strong>
                </div>

                <div className="admin-progress">
                  <span style={{ width: "96%" }} />
                </div>

              </div>

              <div className="admin-progress-item">

                <div>
                  <span>
                    AI Response
                  </span>

                  <strong>
                    92%
                  </strong>
                </div>

                <div className="admin-progress">
                  <span style={{ width: "92%" }} />
                </div>

              </div>

              <div className="admin-progress-item">

                <div>
                  <span>
                    Database
                  </span>

                  <strong>
                    98%
                  </strong>
                </div>

                <div className="admin-progress">
                  <span style={{ width: "98%" }} />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* KNOWLEDGE BASE */}
        {/* ================================================= */}

        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Knowledge Base</h2>

              <p>
                Current RAG knowledge base status.
              </p>
            </div>

            <button
              className="admin-outline-button"
              onClick={() =>
                setActiveMenu("documents")
              }
            >
              Manage Documents →
            </button>

          </div>

          <div className="rag-metrics">

            <div>
              <span>Documents</span>
              <strong>
                {documents.length}
              </strong>
            </div>

            <div>
              <span>Total Chunks</span>
              <strong>90</strong>
            </div>

            <div>
              <span>Vector Database</span>
              <strong>ChromaDB</strong>
            </div>

            <div>
              <span>LLM</span>
              <strong>Qwen3</strong>
            </div>

          </div>

        </div>

      </div>
    );
  };

  const renderUsers = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">
          <div>
            <h1>User Management</h1>
            <p>
              Manage students, faculty and administrators.
            </p>
          </div>
        </div>

        <div className="admin-panel">

          <div className="admin-panel-header">
            <div>
              <h2>Registered Users</h2>
              <p>
                Users currently registered in CampusMind AI.
              </p>
            </div>
          </div>

          <div className="admin-table">

            <div className="admin-table-header">
              <span>Name</span>
              <span>Email</span>
              <span>Role</span>
              <span>Status</span>
            </div>

            {users.map((user) => (
              <div
                className="admin-table-row"
                key={user.id}
              >

                <span>
                  {user.name}
                </span>

                <span>
                  {user.email}
                </span>

                <span>
                  {user.role}
                </span>

                <span>
                  <span className="status-resolved">
                    {user.status}
                  </span>
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">

          <div>
            <h1>Document Management</h1>

            <p>
              Manage documents used by the RAG system.
            </p>
          </div>

          <button
            className="primary-button"
            onClick={() =>
              alert(
                "Document upload will be connected to the backend soon."
              )
            }
          >
            + Upload Document
          </button>

        </div>

        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Knowledge Base Documents</h2>

              <p>
                Documents currently available for RAG.
              </p>
            </div>

          </div>

          <div className="admin-table">

            <div
              className="admin-table-header"
              style={{
                gridTemplateColumns:
                  "2fr .7fr .8fr .7fr 1fr 1fr .7fr",
              }}
            >
              <span>Document</span>
              <span>Type</span>
              <span>Size</span>
              <span>Chunks</span>
              <span>Status</span>
              <span>Added</span>
              <span>Action</span>
            </div>

            {documents.map((document) => (
              <div
                className="admin-table-row"
                key={document.id}
                style={{
                  gridTemplateColumns:
                    "2fr .7fr .8fr .7fr 1fr 1fr .7fr",
                }}
              >

                <span>
                  📄 {document.name}
                </span>

                <span>
                  {document.type}
                </span>

                <span>
                  {document.size}
                </span>

                <span>
                  {document.chunks}
                </span>

                <span>
                  <span className="status-resolved">
                    {document.status}
                  </span>
                </span>

                <span>
                  {document.date}
                </span>

                <span>
                  <button
                    className="admin-delete-button"
                    onClick={() =>
                      deleteDocument(document.id)
                    }
                  >
                    Delete
                  </button>
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    );
  };

  const renderQueries = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">

          <div>
            <h1>Query Monitoring</h1>

            <p>
              Monitor questions asked by students.
            </p>
          </div>

        </div>

        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Student Queries</h2>

              <p>
                Recent AI and human-support queries.
              </p>
            </div>

          </div>

          <div className="admin-table">

            <div className="admin-table-header">
              <span>Student</span>
              <span>Question</span>
              <span>Category</span>
              <span>Status</span>
              <span>Time</span>
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
                  {query.question}
                </span>

                <span>
                  {query.category}
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

                <span>
                  {query.time}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    );
  };

  const renderSupport = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">

          <div>
            <h1>Human Support</h1>

            <p>
              Monitor student queries requiring faculty assistance.
            </p>
          </div>

        </div>

        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Support Escalations</h2>

              <p>
                Queries escalated from CampusMind AI.
              </p>
            </div>

          </div>

          <div className="support-request-list">

            {escalations.map((item) => (
              <div
                className="support-request-item"
                key={item.id}
              >

                <div className="support-request-avatar">
                  {item.student
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div className="support-request-content">

                  <h3>
                    {item.student}
                  </h3>

                  <p>
                    {item.subject}
                  </p>

                  <small>
                    {item.time}
                  </small>

                </div>

                <span
                  className={
                    item.priority === "High"
                      ? "priority-high"
                      : "priority-medium"
                  }
                >
                  {item.priority}
                </span>

                <span>
                  {item.status}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    );
  };

  const renderAnalytics = () => {
    return (
      <div className="admin-dashboard-content">

        <div className="page-title">

          <div>
            <h1>Analytics</h1>

            <p>
              View CampusMind AI usage and performance.
            </p>
          </div>

        </div>

        <div className="admin-stats-grid">

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              💬
            </div>

            <div>
              <span>Total Queries</span>
              <strong>428</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              ✅
            </div>

            <div>
              <span>Resolved</span>
              <strong>392</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              🆘
            </div>

            <div>
              <span>Escalated</span>
              <strong>36</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              ⭐
            </div>

            <div>
              <span>Positive Feedback</span>
              <strong>91%</strong>
            </div>
          </div>

        </div>

        <div className="admin-dashboard-grid">

          <div className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <h2>Query Activity</h2>

                <p>
                  Sample query activity visualization.
                </p>
              </div>
            </div>

            <div className="admin-fake-chart">

              <div style={{ height: "35%" }} />
              <div style={{ height: "55%" }} />
              <div style={{ height: "45%" }} />
              <div style={{ height: "70%" }} />
              <div style={{ height: "60%" }} />
              <div style={{ height: "85%" }} />
              <div style={{ height: "75%" }} />

            </div>

            <div className="admin-chart-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

          </div>

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>Popular Categories</h2>

                <p>
                  Most frequently asked topics.
                </p>
              </div>

            </div>

            <div className="admin-category-list">

              <div>
                <span>Academic</span>
                <strong>38%</strong>
              </div>

              <div>
                <span>Admissions</span>
                <strong>24%</strong>
              </div>

              <div>
                <span>Examination</span>
                <strong>18%</strong>
              </div>

              <div>
                <span>Fees</span>
                <strong>12%</strong>
              </div>

              <div>
                <span>Facilities</span>
                <strong>8%</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>RAG System Status</h2>

              <p>
                Current AI knowledge system components.
              </p>
            </div>

          </div>

          <div className="rag-health">

            <div>
              <span>Document Reader</span>
              <strong>● Active</strong>
            </div>

            <div>
              <span>Embeddings</span>
              <strong>● Active</strong>
            </div>

            <div>
              <span>ChromaDB</span>
              <strong>● Active</strong>
            </div>

            <div>
              <span>Qwen3 LLM</span>
              <strong>● Active</strong>
            </div>

          </div>

        </div>

      </div>
    );
  };

  const renderProfile = () => {
    const user = JSON.parse(
      localStorage.getItem(
        "campusmind_user"
      ) || "{}"
    );

    return (
      <div className="admin-dashboard-content">

        <div className="page-title">

          <div>
            <h1>Admin Profile</h1>

            <p>
              View your administrator account information.
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
                : "A"}
            </div>

            <h2>
              {user.name || "Admin User"}
            </h2>

            <p>
              {user.email || "Admin Account"}
            </p>

            <span className="profile-role">
              🛡️ Administrator
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
                {user.name || "Admin User"}
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                Email
              </span>

              <strong>
                {user.email || "Not available"}
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                Role
              </span>

              <strong>
                Administrator
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
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return renderDashboard();

      case "users":
        return renderUsers();

      case "documents":
        return renderDocuments();

      case "queries":
        return renderQueries();

      case "support":
        return renderSupport();

      case "analytics":
        return renderAnalytics();

      case "profile":
        return renderProfile();

      default:
        return renderDashboard();
    }
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
              Admin Portal
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
              activeMenu === "users"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("users")
            }
          >
            <span>👥</span>
            Users
          </button>

          <button
            className={
              activeMenu === "documents"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("documents")
            }
          >
            <span>📚</span>
            Documents
          </button>

          <button
            className={
              activeMenu === "queries"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("queries")
            }
          >
            <span>💬</span>
            Queries
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

          <button
            className={
              activeMenu === "analytics"
                ? "admin-menu-item active"
                : "admin-menu-item"
            }
            onClick={() =>
              setActiveMenu("analytics")
            }
          >
            <span>📈</span>
            Analytics
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
            Profile
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
      {/* MAIN CONTENT */}
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
                A
              </div>

              <div>
                <strong>
                  Admin
                </strong>

                <span>
                  Administrator
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

export default AdminDashboard;