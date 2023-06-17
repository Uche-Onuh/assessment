import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d4d4d4",
          200: "#a8a8a8",
          300: "#7d7d7d",
          400: "#515151",
          500: "#262626",
          600: "#1e1e1e",
          700: "#171717",
          800: "#0f0f0f",
          900: "#080808",
        },
        secondary: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        gray: {
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#bababa",
          400: "#a3a3a3",
          500: "#8c8c8c",
          600: "#707070",
          700: "#545454",
          800: "#383838",
          900: "#1c1c1c",
        },
        star: {
          100: "#fff7cc",
          200: "#ffef99",
          300: "#ffe766",
          400: "#ffdf33",
          500: "#ffd700",
          600: "#ccac00",
          700: "#998100",
          800: "#665600",
          900: "#332b00",
        },
      }
    : {
        primary: {
          100: "#080808",
          200: "#0f0f0f",
          300: "#171717",
          400: "#1e1e1e",
          500: "#262626",
          600: "#515151",
          700: "#7d7d7d",
          800: "#a8a8a8",
          900: "#d4d4d4",
        },
        secondary: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        gray: {
          100: "#1c1c1c",
          200: "#383838",
          300: "#545454",
          400: "#707070",
          500: "#8c8c8c",
          600: "#a3a3a3",
          700: "#bababa",
          800: "#d1d1d1",
          900: "#e8e8e8",
        },
        star: {
          100: "#332b00",
          200: "#665600",
          300: "#998100",
          400: "#ccac00",
          500: "#ffd700",
          600: "#ffdf33",
          700: "#ffe766",
          800: "#ffef99",
          900: "#fff7cc",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.secondary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.secondary[500],
            },
          }),
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 600,
        md: 900,
        laptop: 1200,
        widesceen: 1536,
      },
    },
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 55,
      },
      h2: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 35,
      },
      h3: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 25,
      },
      h4: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
