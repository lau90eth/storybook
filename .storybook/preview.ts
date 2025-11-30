import type { Preview } from "@storybook/react";

import "./preview.css"; // useremo un CSS custom

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default preview;
