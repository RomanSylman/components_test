import React from "react";
import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import "./InputGroup.css";

interface InputGroupProps {
  children?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = () => {
  return (
    <div className="input-group">
      <InputLabel text="Label" htmlFor="input-id" />
      <InputText value="" onChange={() => {}}  placeholder="Input..."/>
      <InputAnnotation text="Annotation text" />
    </div>
  );
};

export default InputGroup;
