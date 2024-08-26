import React from 'react';

interface InputTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, placeholder }) => {
  return (
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default InputText;