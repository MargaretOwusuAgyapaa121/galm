import React, { useState } from "react";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
  });

  // Track changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit to Google Forms
  const handleSubmit = (e) => {
    e.preventDefault();

    const formID = "<YOUR_GOOGLE_FORM_ID>";
    const entryIDs = {
      firstName: "entry.123456",
      lastName: "entry.234567",
      dob: "entry.345678",
      gender: "entry.456789",
      email: "entry.567890",
      address: "entry.678901",
    };

    const formURL = `https://docs.google.com/forms/d/e/${formID}/formResponse?` +
      `${entryIDs.firstName}=${encodeURIComponent(formData.firstName)}&` +
      `${entryIDs.lastName}=${encodeURIComponent(formData.lastName)}&` +
      `${entryIDs.dob}=${encodeURIComponent(formData.dob)}&` +
      `${entryIDs.gender}=${encodeURIComponent(formData.gender)}&` +
      `${entryIDs.email}=${encodeURIComponent(formData.email)}&` +
      `${entryIDs.address}=${encodeURIComponent(formData.address)}`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", formURL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        alert("✅ Registration submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          email: "",
          address: "",
        });
        setStep(1);
      }
    };
    xhr.send();
  };

  // Check if all fields are filled
  const isStep1Complete =
    formData.firstName &&
    formData.lastName &&
    formData.dob &&
    formData.gender &&
    formData.email &&
    formData.address;

  return (
    <div className="registration-page">
      <div className="registration-header">
        <p className="small-title">DISCIPLE CLASS</p>
        <h1>Registration</h1>
        <p className="description">
          The Disciple classes are designed to expand your knowledge about God,
          how He works in your life and in our world, giving understanding
          to difficult questions of salvation and blessed hope.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="step-indicator">
        <div className={`step ${step >= 1 ? "active" : ""}`}><span>1</span></div>
        <div className="line"></div>
        <div className={`step ${step >= 2 ? "active" : ""}`}><span>2</span></div>
      </div>

      {/* Step 1: Form */}
      {step === 1 && (
        <div className="registration-content">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input name="address" placeholder="Residential Address" value={formData.address} onChange={handleChange} required />
            </div>
            <button
              className="next-btn"
              disabled={!isStep1Complete}
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Confirmation */}
      {step === 2 && (
        <div className="second-step">
          <h2>Step 2: Confirmation</h2>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}><strong>{key.replace(/^\w/, (c) => c.toUpperCase())}:</strong> {value}</li>
            ))}
          </ul>
          <button className="submit-btn" onClick={handleSubmit}>Submit Registration</button>
          <button className="back-btn" onClick={() => setStep(1)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Registration;