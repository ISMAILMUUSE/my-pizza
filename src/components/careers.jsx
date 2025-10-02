import React from 'react';
// // import './Careers.css';
// import { jobOpenings } from './careersData';

const Careers = () => {
  return (
    <section className="careers-section" id="careers">
      <div className="careers-container">
        <div className="careers-header">
          <h1>Join Our Pizza Family</h1>
          <p>We're always looking for passionate people to join our team</p>
        </div>

        <div className="job-listings">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <div className="job-details">
                  <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                  <span><i className="fas fa-clock"></i> {job.type}</span>
                  <span><i className="fas fa-money-bill-wave"></i> {job.salary}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="apply-button">Apply Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-section">
          <h2>Why Work With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-pizza-slice"></i>
              <h3>Free Meals</h3>
              <p>Enjoy delicious pizza during your shifts</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-users"></i>
              <h3>Great Team</h3>
              <p>Work with fun, supportive colleagues</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-chart-line"></i>
              <h3>Growth</h3>
              <p>Opportunities for career advancement</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Flexible Hours</h3>
              <p>We work with your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;