function Profile() {

  const user = JSON.parse(
    localStorage.getItem("campusmind_user") || "{}"
  );


  const userName = user.name || "User";

  const userEmail = user.email || "Not available";

  const userRole = user.role || "student";


  const formattedRole =
    userRole.charAt(0).toUpperCase() +
    userRole.slice(1);


  return (

    <div className="student-profile-page">


      {/* Page Header */}

      <div className="student-page-header">

        <div>

          <span className="student-welcome-label">
            ACCOUNT
          </span>

          <h1>
            My Profile
          </h1>

          <p>
            View your CampusMind account information.
          </p>

        </div>

      </div>



      {/* Profile Layout */}

      <div className="profile-layout">


        {/* Profile Summary */}

        <div className="profile-card profile-summary">


          <div className="profile-avatar">
            👤
          </div>


          <h2 className="profile-user-name">
            {userName}
          </h2>


          <p className="profile-user-email">
            {userEmail}
          </p>


          <span className="profile-role">
            🎓 {formattedRole}
          </span>


          <div className="profile-active-badge">
            ● Active Account
          </div>


        </div>



        {/* Account Details */}

        <div className="profile-card profile-details">


          <h2>
            Account Information
          </h2>



          <div className="profile-detail">

            <span>
              Name:
            </span>

            <strong>
              {userName}
            </strong>

          </div>



          <div className="profile-detail">

            <span>
              Email:
            </span>

            <strong>
              {userEmail}
            </strong>

          </div>



          <div className="profile-detail">

            <span>
              Role:
            </span>

            <strong>
              {formattedRole}
            </strong>

          </div>



          <div className="profile-detail">

            <span>
              Account Status:
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


export default Profile;