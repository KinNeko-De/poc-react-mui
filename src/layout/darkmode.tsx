import React from "react";
import Switch from "@mui/material/Switch";
import { useColorScheme } from "./useColorScheme";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <Switch
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      aria-label="Dark mode toggle"
    />
  );
};