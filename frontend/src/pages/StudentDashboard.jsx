import { useState } from "react";

import Chatbot from "../components/Chatbot";
import CollegeInfo from "../components/CollegeInfo";
import HumanSupport from "../components/HumanSupport";
import Profile from "../components/Profile";


function StudentDashboard({ setPage }) {

  const [activeMenu, setActiveMenu] = useState("dashboard");


  // Get currently logged-in user
  const getStoredUser = () => {
    try {
      return JSON.parse(
        localStorage.getItem("campusmind_user") || "{}"
      );
    } catch {
      return {};
    }
  };


  const currentUser = getStoredUser();

  const userName = currentUser.name || "Student";

  const userRole = currentUser.role || "student";


  // Logout
  const handleLogout = () => {

    localStorage.removeItem("campusmind_token");
    localStorage.removeItem("campusmind_user");

    setPage("login");
  };


  // Page title
  const getPageTitle = () => {

    const titles = {
      dashboard: "Student Dashboard",
      chatbot: "AI Chatbot",
      "college-info": "College Information",
      history: "Chat History",
      support: "Human Support",
      profile: "My Profile",
    };

    return titles[activeMenu] || "Student Dashboard";
  };


  // Open chatbot
  const openChatbot = () => {
    setActiveMenu("chatbot");
  };


  // Dashboard
  const renderDashboard = () => {

    return (
      <section className="student-content">


        {/* Welcome Section */}

        <div className="student-welcome-section">

          <div className="student-welcome-text">

            <span className="student-welcome-label">
              STUDENT PORTAL
            </span>

            <h2>
              Welcome back, {userName}! 👋
            </h2>

            <p>
              Your college information is just a question away.
              Let CampusMind AI help you today.
            </p>

          </div>


          <div className="student-welcome-icon">
            🧠
          </div>

        </div>



        {/* Statistics */}

        <div className="student-stats">


          <div className="student-stat-card">

            <div className="student-stat-icon">
              💬
            </div>

            <div className="student-stat-content">

              <span>
                Total Questions
              </span>

              <strong>
                24
              </strong>

              <small>
                Questions asked
              </small>

            </div>

          </div>



          <div className="student-stat-card">

            <div className="student-stat-icon">
              📚
            </div>

            <div className="student-stat-content">

              <span>
                College Resources
              </span>

              <strong>
                18
              </strong>

              <small>
                Available resources
              </small>

            </div>

          </div>



          <div className="student-stat-card">

            <div className="student-stat-icon">
              🤖
            </div>

            <div className="student-stat-content">

              <span>
                AI Assistance
              </span>

              <strong>
                24/7
              </strong>

              <small>
                Always available
              </small>

            </div>

          </div>


        </div>



        {/* AI Assistant */}

        <div className="student-ai-card">


          <div className="student-ai-header">


            <div className="student-ai-brand">

              <div className="student-ai-avatar">
                🧠
              </div>

              <div>

                <h3>
                  CampusMind AI
                </h3>

                <p>
                  Your intelligent college assistant
                </p>

              </div>

            </div>


            <div className="student-ai-status">

              <span></span>

              Online

            </div>


          </div>



          <div className="student-ai-body">


            <div className="student-ai-message-icon">
              ✨
            </div>


            <h3>
              What would you like to know?
            </h3>


            <p>
              Ask me anything about courses, admissions,
              fees, faculty, facilities, events and other
              college information.
            </p>



            {/* Suggested Questions */}

            <div className="suggested-question-grid">


              <button onClick={openChatbot}>

                <span>
                  🎓
                </span>

                <div>

                  <strong>
                    B.Tech Branches
                  </strong>

                  <small>
                    View available programs
                  </small>

                </div>

              </button>



              <button onClick={openChatbot}>

                <span>
                  📝
                </span>

                <div>

                  <strong>
                    Admission Process
                  </strong>

                  <small>
                    Learn how to apply
                  </small>

                </div>

              </button>



              <button onClick={openChatbot}>

                <span>
                  🏫
                </span>

                <div>

                  <strong>
                    College Facilities
                  </strong>

                  <small>
                    Explore campus facilities
                  </small>

                </div>

              </button>



              <button onClick={openChatbot}>

                <span>
                  📚
                </span>

                <div>

                  <strong>
                    Courses
                  </strong>

                  <small>
                    Explore courses
                  </small>

                </div>

              </button>


            </div>



            {/* Chat Input */}

            <div
              className="student-chat-input"
              onClick={openChatbot}
            >

              <span>
                Ask CampusMind AI anything about your college...
              </span>


              <button
                onClick={(event) => {

                  event.stopPropagation();

                  openChatbot();

                }}
              >
                →
              </button>


            </div>


          </div>

        </div>



        {/* Quick Access */}

        <div className="student-quick-section">


          <div className="student-section-heading">

            <div>

              <h3>
                Quick Access
              </h3>

              <p>
                Frequently used student services
              </p>

            </div>

          </div>



          <div className="student-quick-grid">


            <button
              onClick={() =>
                setActiveMenu("college-info")
              }
            >

              <span>
                📚
              </span>

              <div>

                <strong>
                  College Information
                </strong>

                <small>
                  Courses, fees, faculty & more
                </small>

              </div>

              <b>
                →
              </b>

            </button>



            <button
              onClick={() =>
                setActiveMenu("history")
              }
            >

              <span>
                💬
              </span>

              <div>

                <strong>
                  Chat History
                </strong>

                <small>
                  View previous conversations
                </small>

              </div>

              <b>
                →
              </b>

            </button>



            <button
              onClick={() =>
                setActiveMenu("support")
              }
            >

              <span>
                🚨
              </span>

              <div>

                <strong>
                  Human Support
                </strong>

                <small>
                  Connect with college staff
                </small>

              </div>

              <b>
                →
              </b>

            </button>


          </div>


        </div>


      </section>
    );
  };



  // Other pages
  const renderContent = () => {


    if (activeMenu === "dashboard") {

      return renderDashboard();

    }



    if (activeMenu === "chatbot") {

      return <Chatbot />;

    }



    if (activeMenu === "college-info") {

      return <CollegeInfo />;

    }



    if (activeMenu === "history") {

      return (

        <section className="student-content">


          <div className="student-page-title">

            <div>

              <span className="student-welcome-label">
                CONVERSATIONS
              </span>

              <h2>
                Chat History
              </h2>

              <p>
                View your previous CampusMind conversations.
              </p>

            </div>

          </div>



          <div className="student-placeholder-card">


            <div className="student-placeholder-icon">
              💬
            </div>


            <h3>
              No conversations yet
            </h3>


            <p>
              Your previous conversations will appear here
              after you start chatting with CampusMind AI.
            </p>


            <button
              className="student-primary-button"
              onClick={openChatbot}
            >
              Start a Conversation →
            </button>


          </div>


        </section>

      );

    }



    if (activeMenu === "support") {

      return <HumanSupport />;

    }



    if (activeMenu === "profile") {

      return <Profile />;

    }


    return null;

  };



  return (

    <div className="student-dashboard">


      {/* Sidebar */}

      <aside className="student-sidebar">


        {/* Brand */}

        <div className="student-brand">


          <div className="student-brand-icon">
            🧠
          </div>


          <div>

            <h2>
              CampusMind AI
            </h2>

            <span>
              Student Portal
            </span>

          </div>


        </div>



        <div className="student-menu-label">
          MAIN MENU
        </div>



        {/* Main Menu */}

        <nav className="student-menu">


          <button
            className={
              activeMenu === "dashboard"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("dashboard")
            }
          >

            <span>
              🏠
            </span>

            <label>
              Dashboard
            </label>

          </button>



          <button
            className={
              activeMenu === "chatbot"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("chatbot")
            }
          >

            <span>
              🤖
            </span>

            <label>
              AI Chatbot
            </label>

          </button>



          <button
            className={
              activeMenu === "college-info"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("college-info")
            }
          >

            <span>
              📚
            </span>

            <label>
              College Information
            </label>

          </button>



          <button
            className={
              activeMenu === "history"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("history")
            }
          >

            <span>
              💬
            </span>

            <label>
              Chat History
            </label>

          </button>



          <button
            className={
              activeMenu === "support"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("support")
            }
          >

            <span>
              🚨
            </span>

            <label>
              Human Support
            </label>

          </button>


        </nav>



        {/* Account */}

        <div className="student-menu-label student-account-label">
          ACCOUNT
        </div>



        <nav className="student-menu">


          <button
            className={
              activeMenu === "profile"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveMenu("profile")
            }
          >

            <span>
              👤
            </span>

            <label>
              My Profile
            </label>

          </button>


        </nav>



        {/* Logout */}

        <div className="student-sidebar-bottom">


          <button onClick={handleLogout}>

            <span>
              🚪
            </span>

            <label>
              Logout
            </label>

          </button>


        </div>


      </aside>



      {/* Main */}

      <main className="student-main">


        {/* Topbar */}

        <header className="student-topbar">


          <div>

            <h1>
              {getPageTitle()}
            </h1>

            <p>
              CampusMind AI Student Portal
            </p>

          </div>



          {/* Dynamic User Profile */}

          <button
            className="student-profile-mini"
            onClick={() =>
              setActiveMenu("profile")
            }
          >

            <div>

              <strong>
                {userName}
              </strong>

              <span>
                {userRole === "student"
                  ? "Student"
                  : userRole}
              </span>

            </div>

          </button>


        </header>



        {renderContent()}


      </main>


    </div>

  );
}


export default StudentDashboard;