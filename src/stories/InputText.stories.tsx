import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputText from "../components/InputText/InputText";

export default {
  title: "Components/InputText",
  component: InputText,
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState("");
  return (
    <InputText
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};
