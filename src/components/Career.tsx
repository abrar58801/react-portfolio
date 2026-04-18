import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Westonik</h5>
              </div>
              <h3>April 2022 - Jan 2023</h3>
            </div>
            <p>
              Developed dynamic websites and management systems including CMS
              and HRM platforms. Built full-stack applications using PHP,
              Node.js, HTML, and CSS with structured backend logic. Implemented
              responsive UI and optimized database-driven features for business
              platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Vedsar India Pvt Ltd</h5>
              </div>
              <h3>Feb 2023 – Jan 2025</h3>
            </div>
            <p>
              Developed large-scale platforms including School Management,
              College Management, and MLM systems. Built e-commerce modules,
              attendance tracking systems, and administrative dashboards.
              Designed scalable backend APIs and interactive frontends for
              enterprise-level applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Thixpro Technologies Pvt Ltd</h5>
              </div>
              <h3>March 2025 – Present</h3>
            </div>
            <p>
              Developed multiple web solutions including e-commerce platforms,
              gaming systems, and business websites. Built scalable full-stack
              applications with modern frontend and backend technologies.
              Delivered customized digital solutions for different industries
              and client requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
