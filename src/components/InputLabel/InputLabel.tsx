import React from 'react';
import './InputLabel.css';

interface InputLabelProps {
  text: string;
  htmlFor: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ text, htmlFor }) => {
  return (
    <label className="input-label" htmlFor={htmlFor}>{text}</label>
  );
};

export default InputLabel;