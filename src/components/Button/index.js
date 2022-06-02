import React from "react";

const ButtonStyles = ({ children, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "dodgerblue",
        border: "1px solid dodgerblue",
        height: "30px",
        fontWeight: "bold",
        cursor: "pointer",
        height: "20px"
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonStyles;
