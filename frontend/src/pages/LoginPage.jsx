function LoginPage({
  setPage,
  loginRole,
  setLoginRole,
}) {
  const roles = [
    {
      id: "student",
      icon: "🎓",
      title: "Student",
      description:
        "Ask questions, access college information and get AI assistance.",
    },
    {
      id: "faculty",
      icon: "👨‍🏫",
      title: "Faculty",
      description:
        "Manage student queries, responses and academic information.",
    },
    {
      id: "admin",
      icon: "🛡️",
      title: "Admin",
      description:
        "Manage documents, users, queries and system analytics.",
    },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header className="navbar">
        <div
          className="brand"
          onClick={() => setPage("home")}
        >
          <div className="brand-icon">🧠</div>

          <div>
            <h2>CampusMind AI</h2>
            <span>Smart College Assistant</span>
          </div>
        </div>

        <nav>
          <button
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            onClick={() => setPage("home")}
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
      {/* LOGIN */}
      {/* ================================================= */}

      <main className="login-page">
        <div className="login-container">

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>

          <div className="login-heading">

            <div className="large-brand-icon">
              🧠
            </div>

            <h1>
              Welcome to CampusMind
            </h1>

            <p>
              Select your role to continue
            </p>

          </div>

          {/* ================================================= */}
          {/* ROLE SELECTION */}
          {/* ================================================= */}

          <div className="role-grid">

            {roles.map((role) => (
              <button
                key={role.id}
                className={`role-card ${
                  loginRole === role.id
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setLoginRole(role.id)
                }
              >

                <div className="role-icon">
                  {role.icon}
                </div>

                <div>
                  <h3>{role.title}</h3>

                  <p>
                    {role.description}
                  </p>
                </div>

                <div className="role-radio">
                  {loginRole === role.id
                    ? "✓"
                    : ""}
                </div>

              </button>
            ))}

          </div>

          {/* ================================================= */}
          {/* LOGIN FORM */}
          {/* ================================================= */}

          <form
            className="login-form"
            onSubmit={async (event) => {
              event.preventDefault();

              const formData =
                new FormData(
                  event.currentTarget
                );

              const email =
                formData.get("email");

              const password =
                formData.get("password");

              try {
                const response =
                  await fetch(
                    "http://127.0.0.1:8000/login",
                    {
                      method: "POST",

                      headers: {
                        "Content-Type":
                          "application/json",
                      },

                      body: JSON.stringify({
                        email,
                        password,
                      }),
                    }
                  );

                const data =
                  await response.json();

                if (!response.ok) {
                  alert(
                    data.detail ||
                      "Invalid email or password"
                  );

                  return;
                }

                /* Store JWT token */

                localStorage.setItem(
                  "campusmind_token",
                  data.access_token
                );

                /* Store user information */

                localStorage.setItem(
                  "campusmind_user",
                  JSON.stringify(data.user)
                );

                /* Check selected role */

                if (
                  data.user.role !==
                  loginRole
                ) {
                  alert(
                    `This account is registered as ${data.user.role}, not ${loginRole}.`
                  );

                  return;
                }

                /* Redirect according to role */

                if (
                  data.user.role ===
                  "student"
                ) {
                  setPage(
                    "student-dashboard"
                  );
                } else if (
                  data.user.role ===
                  "faculty"
                ) {
                  setPage(
                    "faculty-dashboard"
                  );
                } else if (
                  data.user.role ===
                  "admin"
                ) {
                  setPage(
                    "admin-dashboard"
                  );
                }

              } catch (error) {

                console.error(
                  "Login error:",
                  error
                );

                alert(
                  "Unable to connect to CampusMind AI backend. Please make sure FastAPI is running."
                );
              }
            }}
          >

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <div className="form-options">

              <label className="remember">
                <input
                  type="checkbox"
                />

                Remember me
              </label>

              <button type="button">
                Forgot password?
              </button>

            </div>

            <button
              type="submit"
              className="login-button"
            >
              Login as{" "}
              {loginRole
                .charAt(0)
                .toUpperCase() +
                loginRole.slice(1)}
              →
            </button>

          </form>

          {/* ================================================= */}
          {/* REGISTRATION LINK */}
          {/* ================================================= */}

          {(loginRole === "student" ||
            loginRole === "faculty") && (
            <div className="register-link">

              <span>
                New to CampusMind?
              </span>

              <button
                type="button"
                onClick={() =>
                  setPage(
                    loginRole === "student"
                      ? "student-register"
                      : "faculty-register"
                  )
                }
              >
                Create a{" "}
                {loginRole === "student"
                  ? "student"
                  : "faculty"}{" "}
                account
              </button>

            </div>
          )}

          <p className="login-note">
            🔒 Your information is securely protected.
          </p>

        </div>
      </main>
    </>
  );
}

export default LoginPage;