function CollegeInfo() {
  return (
    <div className="student-college-info-page">
      <div className="student-page-header">
        <div>
          <h1>College Information</h1>
          <p>Explore important information about your college.</p>
        </div>
      </div>

      <div className="college-info-grid">
        <div className="college-info-card">
          <div className="college-info-icon">🎓</div>
          <h3>Courses & Programs</h3>
          <p>
            View information about B.Tech programs, departments,
            academic structure and courses offered by the college.
          </p>
        </div>

        <div className="college-info-card">
          <div className="college-info-icon">📝</div>
          <h3>Admissions</h3>
          <p>
            Get information about admission procedures, eligibility,
            required documents and important admission details.
          </p>
        </div>

        <div className="college-info-card">
          <div className="college-info-icon">💰</div>
          <h3>Fees</h3>
          <p>
            Find information about tuition fees, examination fees
            and other college-related charges.
          </p>
        </div>

        <div className="college-info-card">
          <div className="college-info-icon">👨‍🏫</div>
          <h3>Faculty</h3>
          <p>
            Explore faculty and department information available
            through the college knowledge base.
          </p>
        </div>

        <div className="college-info-card">
          <div className="college-info-icon">🏢</div>
          <h3>Facilities</h3>
          <p>
            Learn about classrooms, laboratories, library,
            transportation and other campus facilities.
          </p>
        </div>

        <div className="college-info-card">
          <div className="college-info-icon">📅</div>
          <h3>Events & Calendar</h3>
          <p>
            Access information about academic events,
            examinations, holidays and important dates.
          </p>
        </div>
      </div>

      <div className="college-info-note">
        <div className="college-info-note-icon">🤖</div>

        <div>
          <h3>Need specific information?</h3>
          <p>
            Ask CampusMind AI your question and get an answer
            from the available college information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollegeInfo;