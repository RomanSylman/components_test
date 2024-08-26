import { Meta, StoryFn } from "@storybook/react";
import InputLabel from "../components/InputLabel/InputLabel";

export default {
  title: "Components/InputLabel",
  component: InputLabel,
} as Meta;

const Template: StoryFn = (args) => (
  <InputLabel text={""} htmlFor={""} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Label:",
  htmlFor: "input-id",
};
