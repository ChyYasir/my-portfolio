import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full bg-dark p-8 rounded-lg shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
