import { addons, types } from "@storybook/manager-api";

addons.register("theme-switch", () => {
  addons.add("theme-switch/tool", {
    title: "Theme Switcher",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => {
      const setTheme = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
      };

      return (
        <select
          onChange={(e) => setTheme(e.target.value)}
          style={{ margin: 5 }}
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      );
    },
  });
});
