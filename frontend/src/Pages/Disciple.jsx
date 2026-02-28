import React, { useState } from "react";


const Registration = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="registration-page">

      {/* HEADER */}
      <div className="registration-header">
        <p className="small-title">DISCIPLE CLASS</p>
        <h1>Registration</h1>
        <p className="description">
          The Disciple classes are designed to expand your knowledge about God,
          how He works in your life and in our world, to give us understanding
          to some difficult questions of our salvation and blessed hope.
        </p>
      </div>

      {/* STEP INDICATOR */}
      <div className="step-indicator">
        <div className={`step ${step >= 1 ? "active" : ""}`}>
          <span>1</span>
        </div>
        <div className="line"></div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>
          <span>2</span>
        </div>
      </div>

      {step === 1 && (
        <div className="registration-content">

          {/* FORM SECTION */}
          <div className="form-section">
            <h2>Personal Information</h2>

            <div className="form-grid">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />

              <input type="date" placeholder="Date of Birth" />
              <select>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Residential Address" />
            </div>

            <button className="next-btn" onClick={() => setStep(2)}>
              Next
            </button>
          </div>

          {/* GENERAL INQUIRIES */}
          <div className="inquiry-section">
            <h2>General Inquiries</h2>
            <p><strong>Location:</strong> 173 Brush Street, Lancaster, MA 9900</p>
            <p><strong>Phone:</strong> +1 555 555 5555</p>
            <p><strong>Email:</strong> info@camsystem.org</p>
            <p>If you are looking for a church to worship, please contact us at zak@gmail.com</p>
          </div>

        </div>
      )}

      {step === 2 && (
        <div className="second-step">
          <h2>Step 2: Confirmation</h2>
          <p>Please review your details and submit your registration.</p>
          <button className="submit-btn">Submit Registration</button>
        </div>
      )}

    </div>
  );
};

export default Registration;
