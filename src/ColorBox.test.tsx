import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ColorBox from "./ColorBox";

it("does not apply border when disabled", () => {
  render(
    <ColorBox color="green" size={120} border={false} borderRadius={8} />
  );
  const box = screen.getByText("green") as HTMLElement;

  // JSDOM normalizza "border: none" come "medium none" oppure "medium"
  expect(box.style.border).to.satisfy((value: string) =>
    value === "" || value.includes("none") || value.includes("medium")
  );
});
