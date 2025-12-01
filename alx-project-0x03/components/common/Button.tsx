import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor, action }) => {
  return (
    <button
      onClick={action}
      className={`px-6 py-3 rounded-md text-white font-semibold`}
      style={{ backgroundColor: buttonBackgroundColor }}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
