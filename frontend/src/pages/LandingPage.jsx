import collegeLogo from "../assets/mic-college-logo.png";

function LandingPage({ setPage }) {
  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header className="navbar">

        {/* COLLEGE BRAND */}
        <div className="college-brand">

          <div className="college-logo-box">
            <img
              src={collegeLogo}
              alt="DVR & Dr. HS MIC College of Technology"
            />
          </div>

          <div className="college-name">
            <h3>
              DVR & Dr. HS MIC College of Technology
            </h3>
          </div>

        </div>

        {/* NAVBAR DIVIDER */}
        <div className="navbar-divider"></div>

        {/* CAMPUSMIND BRAND */}
        <div
          className="brand"
          onClick={() => setPage("home")}
        >

          <div>
            <h2>
              CampusMind AI
            </h2>

            <span>
              Smart College Assistant
            </span>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav>

          <button
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Features
          </button>

          <button
            className="nav-login"
            onClick={() => setPage("login")}
          >
            Login
          </button>

        </nav>

      </header>

      {/* ================================================= */}
      {/* HOME */}
      {/* ================================================= */}

      <main>

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="hero-section">

          <div className="hero-content">

            <div className="badge">
              ✨ AI-Powered College Information System
            </div>

            <h1>
              Your College.
              <br />
              <span>
                Your AI Assistant.
              </span>
            </h1>

            <p>
              CampusMind AI helps students, faculty and
              administrators access college information
              through an intelligent multilingual chatbot
              powered by RAG and AI.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => setPage("login")}
              >
                Get Started →
              </button>

              <button
                className="secondary-button"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Explore Features
              </button>

            </div>

          </div>

          {/* ================================================= */}
          {/* HERO CHAT CARD */}
          {/* ================================================= */}

          <div className="hero-card">

            <div className="chat-header">

              <div className="chat-avatar">
                🧠
              </div>

              <div>
                <strong>
                  CampusMind AI
                </strong>

                <small>
                  Online • Ready to help
                </small>
              </div>

              <span className="online-dot"></span>

            </div>

            <div className="chat-body">

              <div className="bot-message">
                👋 Hello! I'm CampusMind AI.
                <br />
                How can I help you today?
              </div>

              <div className="user-message">
                What B.Tech branches are available?
              </div>

              <div className="bot-message">
                🎓 Our college offers B.Tech programs
                including CSE, AI&DS, AI&ML, IT, ECE
                and more.
              </div>

            </div>

            <div className="chat-input-preview">

              Ask anything about your college...

              <button>
                ➤
              </button>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <section
          id="features"
          className="features-section"
        >

          <div className="section-heading">

            <span>
              FEATURES
            </span>

            <h2>
              Everything you need in one place
            </h2>

            <p>
              CampusMind brings college information
              and student services together in a single
              intelligent platform.
            </p>

          </div>

          <div className="feature-grid">

            {/* Feature 1 */}

            <div className="feature-card">

              <div className="feature-icon">
                🤖
              </div>

              <h3>
                AI Chatbot
              </h3>

              <p>
                Ask questions naturally and receive useful
                college-related answers.
              </p>

            </div>

            {/* Feature 2 */}

            <div className="feature-card">

              <div className="feature-icon">
                📚
              </div>

              <h3>
                Official Information
              </h3>

              <p>
                Answers are generated using authorized
                college documents and information.
              </p>

            </div>

            {/* Feature 3 */}

            <div className="feature-card">

              <div className="feature-icon">
                🌐
              </div>

              <h3>
                Multilingual
              </h3>

              <p>
                Communicate with CampusMind in English
                and Telugu.
              </p>

            </div>

            {/* Feature 4 */}

            <div className="feature-card">

              <div className="feature-icon">
                🔍
              </div>

              <h3>
                Source Citations
              </h3>

              <p>
                See the source document used to provide
                an answer.
              </p>

            </div>

            {/* Feature 5 */}

            <div className="feature-card">

              <div className="feature-icon">
                👥
              </div>

              <h3>
                Student & Faculty
              </h3>

              <p>
                Dedicated experiences for students,
                faculty and administrators.
              </p>

            </div>

            {/* Feature 6 */}

            <div className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>
                Smart Analytics
              </h3>

              <p>
                Administrators can monitor queries
                and system activity.
              </p>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* HOW IT WORKS */}
        {/* ================================================= */}

        <section className="how-section">

          <div className="section-heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              Simple for students. Powerful underneath.
            </h2>

          </div>

          <div className="steps">

            {/* Step 1 */}

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h3>
                Ask
              </h3>

              <p>
                Ask your question through the
                CampusMind chatbot.
              </p>

            </div>

            {/* Step 2 */}

            <div className="step">

              <div className="step-number">
                02
              </div>

              <h3>
                Retrieve
              </h3>

              <p>
                Relevant information is retrieved
                from college documents.
              </p>

            </div>

            {/* Step 3 */}

            <div className="step">

              <div className="step-number">
                03
              </div>

              <h3>
                Generate
              </h3>

              <p>
                AI generates a clear answer using
                the retrieved information.
              </p>

            </div>

            {/* Step 4 */}

            <div className="step">

              <div className="step-number">
                04
              </div>

              <h3>
                Respond
              </h3>

              <p>
                You receive the answer along with
                its source.
              </p>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="cta-section">

          <h2>
            Ready to explore your campus smarter?
          </h2>

          <p>
            Access college information through
            CampusMind AI.
          </p>

          <button
            className="primary-button"
            onClick={() => setPage("login")}
          >
            Get Started →
          </button>

        </section>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <footer className="campusmind-footer">

          <div className="footer-main">

            {/* CAMPUSMIND */}

            <div className="footer-brand">

              <strong>
                🧠 CampusMind AI
              </strong>

              <p>
                RAG-Powered Multilingual
                College Assistant
              </p>

            </div>

            {/* COLLEGE INFORMATION */}

            <div className="footer-college">

              <h3>
                DVR & Dr. HS MIC College of Technology
              </h3>

              <p>
                NH 9, Vijayawada - Hyderabad Highway,
                Kanchikacherla,
                <br />
                N.T.R District, Andhra Pradesh - 521180
              </p>

            </div>

            {/* CONTACT INFORMATION */}

            <div className="footer-contact">

              <h3>
                Contact Us
              </h3>

              <p>
                📞 +91 7382616824
              </p>

              <p>
                📞 +91 9491457799
              </p>

              <p>
                ☎️ 08678-273535, 273569
              </p>

              <p>
                ✉️ office@mictech.ac.in
              </p>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 CampusMind AI. All rights reserved.
            </span>

            <span>
              DVR & Dr. HS MIC College of Technology
            </span>

          </div>

        </footer>

      </main>
    </>
  );
}

export default LandingPage;