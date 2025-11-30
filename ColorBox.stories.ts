import type { Meta, StoryObj } from "@storybook/react";
import { ColorBox } from "../src/ColorBox";

const meta: Meta<typeof ColorBox> = {
  title: "ColorBox",
  component: ColorBox,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color", description: "Color of the box" },
    size: {
      control: { type: "range", min: 50, max: 250, step: 10 },
      description: "Size in pixels",
    },
    border: {
      control: "boolean",
      description: "Show border or not",
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "Rounded corners",
    },
    borderWidth: {
      control: { type: "range", min: 1, max: 15, step: 1 },
      description: "Border thickness",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {
  args: {
    color: "red",
    size: 120,
    border: true,
    borderRadius: 8,
    borderWidth: 2,
  },
};
