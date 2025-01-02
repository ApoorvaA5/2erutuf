import React from 'react';
import logoImage from "../../assets/logo.png"; // Replace with your logo's path

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logoImage}
        alt="Logo"
        style={{
          width: "140px", // Adjust the width to make the logo bigger
          height: "120px",
        }}
      />
      {/* Text removed */}
    </div>
  );
};

export default Logo;


