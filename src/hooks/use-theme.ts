import { useTheme as useNextTheme } from "next-themes";

export enum Theme {
  dark = "dark",
  light = "light",
}

export const useTheme = (): {
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
} => {
  const props = useNextTheme();
  // check if theme is set to system and if it is set to dark
  if (props.theme === "system") {
    props.setTheme("dark");
  }

  return {
    isDarkTheme: props.theme === Theme.dark,
    setTheme: props.setTheme,
  };
};
