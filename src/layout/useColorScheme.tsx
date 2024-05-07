import { useEffect, useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";


export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useState(() => {
    const userPreference = localStorage.getItem('isDark');
    if (userPreference !== null) {
      return JSON.parse(userPreference);
    } else {
      return !!systemPrefersDark;
    }
  });

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark,
  };
}