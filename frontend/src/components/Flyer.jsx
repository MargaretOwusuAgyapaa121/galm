import { useState, useEffect } from "react";

const FlyerPopup = () => {
  const [showFlyer, setShowFlyer] = useState(true);

  // Optional: only show once per session
  useEffect(() => {
    const seen = sessionStorage.getItem("flyerSeen");
    if (seen) {
      setShowFlyer(false);
    }
  }, []);

  const handleClose = () => {
    setShowFlyer(false);
    sessionStorage.setItem("flyerSeen", "true");
  };

  if (!showFlyer) return null;

  return (
    <div className="flyer-overlay" onClick={handleClose}>
      <div className="flyer-content">
        <img 
          src="/assets/pv/background/bg7.jpeg" 
          alt="Event Flyer" 
          className="flyer-image"
        />
      </div>
    </div>
  );
};

export default FlyerPopup;