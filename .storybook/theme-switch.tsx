import { addons, types } from "@storybook/manager-api";
import React from "react";

addons.register("github-dark-theme/switcher", () => {
  addons.add("github-dark-theme/tool", {
    title: "Theme",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => {
      const setTheme = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
      };

      return (
        <select
          onChange={(e) => setTheme(e.target.value)}
          style={{
            margin: "4px",
            padding: "4px 8px",
            background: "var(--sb-bg-soft)",
            color: "var(--sb-text)",
            border: "1px solid var(--sb-border)",
            borderRadius: "6px",
          }}
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 GitHub Dark</option>
        </select>
      );
    },
  });
});
