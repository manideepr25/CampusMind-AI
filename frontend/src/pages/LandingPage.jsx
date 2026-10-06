import { useState } from "react";
import "./LandingPage.css";
import collegeLogo from "../assets/mic-college-logo.png";

function LandingPage({ setPage }) {
  const [chatMessage, setChatMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hello! I'm CampusMind AI.",
    },
    {
      id: 2,
      sender: "bot",
      text: "How can I help you with your college information?",
    },
    {
      id: 3,
      sender: "user",
      text: "What B.Tech branches are available?",
    },
    {
      id: 4,
      sender: "bot",
      text: "🎓 Our college offers B.Tech programs including CSE, AI&DS, AI&ML, IT, ECE and more.",
    },
  ]);

  const sendPublicMessage = () => {
    if (!chatMessage.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: chatMessage.trim(),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setChatMessage("");
  };

  return (
    <div className="landing-page">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header className="navbar">

        {/* COLLEGE BRAND */}
        <div className="college-brand">
          <img
            src={collegeLogo}
            alt="DVR & Dr. HS MIC College of Technology"
            className="college-logo"
          />

          <div className="college-brand-text">
            <strong>
              DVR & Dr. HS MIC College of Technology
            </strong>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="navbar-divider">|</div>

        {/* CAMPUSMIND BRAND */}
        <div
          className="brand"
          onClick={() => setPage("home")}
        >
          <div className="brand-icon">
            🧠
          </div>

          <div>
            <h2>CampusMind AI</h2>
            <span>Smart College Assistant</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav>
          <button onClick={() => setPage("home")}>
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
      {/* HERO */}
      {/* ================================================= */}

      <main>

        <section className="hero-section">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="badge">
              ✨ AI-Powered College Information System
            </div>

            <h1>
              Your College.
              <br />
              <span>Your AI Assistant.</span>
            </h1>

            <p>
              Get instant answers about your college in English or Telugu,
              straight from official documents.
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

            <div className="hero-flow">
              <span>Ask</span>
              <span className="flow-arrow">→</span>
              <span>Get answer</span>
              <span className="flow-arrow">→</span>
              <span>See source</span>
            </div>

          </div>


          {/* ================================================= */}
          {/* PUBLIC AI CHATBOT */}
          {/* ================================================= */}

          <div className="hero-chatbot">

            {/* CHAT HEADER */}
            <div className="hero-chat-header">

              <div className="hero-chat-title">

                <div className="hero-chat-icon">
                  🧠
                </div>

                <div>
                  <strong>
                    CampusMind AI
                  </strong>

                  <span>
                    Online • Ready to help
                  </span>
                </div>

              </div>

              <span className="hero-online-dot"></span>

            </div>


            {/* CHAT MESSAGES */}
            <div className="hero-chat-body">

              {messages.map((message) => (

                <div
                  key={message.id}
                  className={
                    message.sender === "user"
                      ? "hero-user-message"
                      : "hero-bot-message"
                  }
                >
                  {message.text}
                </div>

              ))}

            </div>


            {/* PUBLIC CHAT NOTE */}
            <div className="hero-chat-note">
              💡 No login required to ask questions
            </div>


            {/* CHAT INPUT */}
            <div className="hero-chat-input">

              <input
                type="text"
                placeholder="Ask anything about your college..."
                value={chatMessage}
                onChange={(event) =>
                  setChatMessage(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendPublicMessage();
                  }
                }}
              />

              <button
                onClick={sendPublicMessage}
                aria-label="Send message"
              >
                ➤
              </button>

            </div>


            {/* LOGIN FOR PERSONALIZED FEATURES */}
            <div className="hero-chat-footer">

              <span>
                Want chat history & personalized services?
              </span>

              <button
                onClick={() => setPage("login")}
              >
                Login →
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

            <span>FEATURES</span>

            <h2>
              Everything you need in one place
            </h2>

            <p>
              CampusMind brings college information and student
              services together in a single intelligent platform.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">🤖</div>

              <h3>AI Chatbot</h3>

              <p>
                Ask questions naturally and receive useful
                college-related answers.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">📚</div>

              <h3>Official Information</h3>

              <p>
                Answers are generated using authorized college
                documents and information.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">🌐</div>

              <h3>Multilingual</h3>

              <p>
                Communicate with CampusMind in English and Telugu.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">🔍</div>

              <h3>Source Citations</h3>

              <p>
                See the source document used to provide an answer.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">👥</div>

              <h3>Student & Faculty</h3>

              <p>
                Dedicated experiences for students, faculty and
                administrators.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">📊</div>

              <h3>Smart Analytics</h3>

              <p>
                Administrators can monitor queries and system activity.
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
            Access college information through CampusMind AI.
          </p>

          <button
            className="primary-button"
            onClick={() => setPage("login")}
          >
            Get Started →
          </button>

        </section>

      </main>


      {/* ================================================= */}
      {/* COLLEGE FOOTER */}
      {/* ================================================= */}

      <footer className="college-footer">

        <div className="college-footer-content">

          {/* ADDRESS */}
          <div className="college-address-section">

            <h2>
              <span className="footer-location-icon">
                📍
              </span>

              Our{" "}
              <span>
                College Address
              </span>
            </h2>

            <h3>
              DVR & Dr. HS MIC College of Technology
            </h3>

            <p className="college-address">
              NH 9, Vijayawada - Hyderabad Highway, Kanchikacherla,
              <br />
              N.T.R District, Andhra Pradesh - 521180
            </p>

          </div>


          {/* CONTACT */}
          <div className="college-contact-section">

            <h3 className="contact-heading">

              <span></span>

              Contact Us

              <span></span>

            </h3>


            <div className="contact-details">

              <div className="contact-item">

                <div className="contact-icon">
                  📞
                </div>

                <div>
                  <span>Mobile</span>

                  <strong>
                    +91 7382616824
                  </strong>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  📱
                </div>

                <div>
                  <span>Mobile</span>

                  <strong>
                    +91 9491457799
                  </strong>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  ☎️
                </div>

                <div>
                  <span>Landline</span>

                  <strong>
                    08678-273535, 273569
                  </strong>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  ✉️
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    office@mictech.ac.in
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* FOOTER BOTTOM */}
          <div className="college-footer-bottom">

            <p>
              © 2026 DVR & Dr. HS MIC College of Technology.
              All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default LandingPage;