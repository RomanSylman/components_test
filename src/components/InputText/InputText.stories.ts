import InputText from "./InputText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputText> = {
  title: "Components/InputText",
  component: InputText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Primary: Story = {
  args: {
    appearance: "default",
    placeholder: "Input...",
  },
};

export const Hover: Story = {
  args: {
    appearance: "hover",
    placeholder: "Input...",
  },
};

export const Error: Story = {
  args: {
    appearance: "error",
    placeholder: "Input...",
  },
};

export const Focus: Story = {
  args: {
    appearance: "focus",
    placeholder: "Input...",
  },
};

export const ErrorFocus: Story = {
  args: {
    appearance: "error-focus",
    placeholder: "Input...",
  },
};

export const Disabled: Story = {
  args: {
    appearance: "disabled",
    placeholder: "Input...",
  },
};
