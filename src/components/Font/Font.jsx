import React from "react";
import "./Font.css"; // اینجا فونت‌ها رو ایمپورت کن

const Font = ({ children }) => {
  return (
    <div style={{ fontFamily: "Shabnam, system-ui, sans-serif" }}>
      {children}
    </div>
  );
};

export default Font;
