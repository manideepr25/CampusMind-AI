import { useState } from "react";

function Chatbot() {
  const [chatMessage, setChatMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello Thai! 👋",
    },
    {
      type: "bot",
      text: "I'm CampusMind AI, your college information assistant. I can help you with courses, admissions, fees, faculty, facilities, events and other college-related information.",
    },
    {
      type: "bot",
      text: "What would you like to know?",
    },
    {
      type: "user",
      text: "What B.Tech branches are available?",
    },
    {
      type: "bot",
      text: "The college offers several B.Tech programs.",
    },
    {
      type: "source",
      text: "📚 Source: College Information\n• CSE\n• AI & Data Science\n• AI & ML\n• Information Technology\n• ECE",
    },
  ]);

  const sendMessage = () => {
    const message = chatMessage.trim();

    if (!message) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        type: "user",
        text: message,
      },
    ]);

    setChatMessage("");
  };

  const askSuggestedQuestion = (question) => {
    setChatMessage(question);
  };

  return (
    <div className="student-chatbot-page">

      {/* Page Header */}
      <div className="student-page-header">

        <div>
          <span className="student-welcome-label">
            AI ASSISTANT
          </span>

          <h1>CampusMind AI</h1>

          <p>
            Ask questions and get information about your college.
          </p>
        </div>

      </div>


      {/* Chat Container */}
      <div className="chatbot-container">

        {/* Chat Header */}
        <div className="chatbot-header">

          <div className="chatbot-header-left">

            <div className="chatbot-avatar">
              🧠
            </div>

            <div>
              <h3>CampusMind AI</h3>

              <span className="chatbot-online">
                <span></span>
                Online • Ready to help
              </span>
            </div>

          </div>

          <div className="chatbot-header-badge">
            RAG Assistant
          </div>

        </div>


        {/* Messages */}
        <div className="chatbot-messages">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`chat-message ${message.type}`}
            >

              {message.type === "bot" && (
                <div className="chat-message-avatar">
                  🧠
                </div>
              )}

              <div className="chat-message-content">

                {message.text.split("\n").map(
                  (line, lineIndex) => (
                    <div key={lineIndex}>
                      {line}
                    </div>
                  )
                )}

              </div>

            </div>

          ))}

        </div>


        {/* Suggested Questions */}
        <div className="suggested-questions-section">

          <div className="suggested-title">
            <span>✨</span>
            <span>Suggested questions</span>
          </div>

          <div className="suggested-questions">

            <button
              onClick={() =>
                askSuggestedQuestion(
                  "What courses are available?"
                )
              }
            >
              🎓 What courses are available?
            </button>

            <button
              onClick={() =>
                askSuggestedQuestion(
                  "What is the admission process?"
                )
              }
            >
              📝 What is the admission process?
            </button>

            <button
              onClick={() =>
                askSuggestedQuestion(
                  "What facilities are available?"
                )
              }
            >
              🏫 What facilities are available?
            </button>

          </div>

        </div>


        {/* Input */}
        <div className="chatbot-input-wrapper">

          <div className="chatbot-input-area">

            <input
              type="text"
              value={chatMessage}
              onChange={(event) =>
                setChatMessage(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask CampusMind AI anything about your college..."
            />

            <button
              onClick={sendMessage}
              disabled={!chatMessage.trim()}
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

          <p className="chatbot-disclaimer">
            🔒 Answers are generated using official college
            information.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;