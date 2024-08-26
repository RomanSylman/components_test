import React from 'react';

interface InputLabelProps {
  text: string;
  htmlFor: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  );
};

export default InputLabel;