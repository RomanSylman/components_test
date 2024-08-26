import React from 'react';

interface InputAnnotationProps {
  text: string;
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({ text }) => {
  return (
    <small>{text}</small>
  );
};

export default InputAnnotation;