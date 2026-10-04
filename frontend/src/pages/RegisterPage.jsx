import { useState } from "react";

function RegisterPage({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: "student",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Registration failed.");
        setLoading(false);
        return;
      }

      setMessage(
        "Student account created successfully! You can now login."
      );

      setFormData({
        name: "",
        email: "",
        studentId: "",
        department: "",
        year: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      setError(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <header className="navbar">

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

        <nav>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("home")}>
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


      <main className="login-page">

        <div className="login-container register-container">

          <button
            className="back-button"
            onClick={() => setPage("login")}
          >
            ← Back to Login
          </button>


          <div className="login-heading">

            <div className="large-brand-icon">
              🎓
            </div>

            <h1>
              Create Student Account
            </h1>

            <p>
              Register to access CampusMind AI
            </p>

          </div>


          {message && (
            <div className="success-message">
              {message}
            </div>
          )}


          {error && (
            <div className="error-message">
              {error}
            </div>
          )}


          <form
            className="login-form registration-form"
            onSubmit={handleSubmit}
          >

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />


            <label>
              Student Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your college email"
              required
            />


            <label>
              Student ID / Roll Number
            </label>

            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Enter your student ID"
              required
            />


            <label>
              Department
            </label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >

              <option value="">
                Select your department
              </option>

              <option value="AI&DS">
                Artificial Intelligence & Data Science
              </option>

              <option value="CSE">
                Computer Science & Engineering
              </option>

              <option value="AI&ML">
                Artificial Intelligence & Machine Learning
              </option>

              <option value="IT">
                Information Technology
              </option>

              <option value="ECE">
                Electronics & Communication Engineering
              </option>

            </select>


            <label>
              Year
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >

              <option value="">
                Select your year
              </option>

              <option value="1">
                1st Year
              </option>

              <option value="2">
                2nd Year
              </option>

              <option value="3">
                3rd Year
              </option>

              <option value="4">
                4th Year
              </option>

            </select>


            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />


            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />


            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Student Account →"}
            </button>

          </form>


          <div className="register-link">

            <span>
              Already have an account?
            </span>

            <button
              type="button"
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </div>


          <p className="login-note">
            🔒 Your information is securely protected.
          </p>

        </div>

      </main>
    </>
  );
}

export default RegisterPage;