import { useState } from "react";

function HumanSupport() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setSubmitted(true);
    setMessage("");
  };

  return (
    <div className="student-support-page">
      <div className="student-page-header">
        <div>
          <h1>Human Support</h1>
          <p>
            Need help from a faculty member? Submit your query here.
          </p>
        </div>
      </div>

      <div className="support-layout">
        <div className="support-info-card">
          <div className="support-icon">👨‍🏫</div>

          <h2>Connect with Faculty</h2>

          <p>
            If CampusMind AI cannot answer your question, you can
            submit it to the appropriate faculty member for assistance.
          </p>

          <div className="support-features">
            <div>
              <span>✓</span>
              <p>Submit your question</p>
            </div>

            <div>
              <span>✓</span>
              <p>Faculty reviews your query</p>
            </div>

            <div>
              <span>✓</span>
              <p>Receive a response</p>
            </div>
          </div>
        </div>

        <div className="support-form-card">
          <h2>Submit a Query</h2>

          {submitted ? (
            <div className="support-success">
              <div className="support-success-icon">✓</div>

              <h3>Query Submitted Successfully</h3>

              <p>
                Your query has been sent to the faculty support team.
                You will receive a response soon.
              </p>

              <button
                className="primary-button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter your query subject"
                required
              />

              <label>Category</label>

              <select required defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                <option value="academic">Academic</option>
                <option value="admissions">Admissions</option>
                <option value="examination">Examination</option>
                <option value="fees">Fees</option>
                <option value="facilities">Facilities</option>
                <option value="other">Other</option>
              </select>

              <label>Your Query</label>

              <textarea
                rows="6"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Describe your question or issue..."
                required
              />

              <button
                type="submit"
                className="primary-button support-submit-button"
              >
                Submit Query →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default HumanSupport;