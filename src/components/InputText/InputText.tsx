import React from "react";
import "./InputText.css";

interface InputTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  appearance?: "default" | "focus" | "error" | "error-focus" | "disabled" | "hover";
  size?: "s" | "m" | "l" | "xl";
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  appearance = "default",
  size = "m",
}) => {
  return (
    <input
      type="text"
      className={`input-text input-text--${size} input-text--${appearance}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
