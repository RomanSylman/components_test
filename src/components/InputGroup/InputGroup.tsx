import React from 'react';

interface InputGroupProps {
  children: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ children }) => {
  return (
    <div className="input-group">
      {children}
    </div>
  );
};

export default InputGroup;