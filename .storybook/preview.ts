import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1A1A1E",
        },
        {
          name: "light",
          value: "#FFFFFF",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
