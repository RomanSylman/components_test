import { Meta, StoryFn } from "@storybook/react";
import InputAnnotation from "../components/InputAnnotation/InputAnnotation";

export default {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
} as Meta;

const Template: StoryFn = (args) => <InputAnnotation text={""} {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Annotation text",
};
