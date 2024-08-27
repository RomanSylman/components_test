import React from "react";
import "./InputAnnotation.css";

interface InputAnnotationProps {
  text: string;
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({ text }) => {
  return <div className="input-annotation">{text}</div>;
};

export default InputAnnotation;
