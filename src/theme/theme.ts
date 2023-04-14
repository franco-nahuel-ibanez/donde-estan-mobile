import { DefaultTheme, Theme } from "@react-navigation/native";

export const MyTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f29d64',
    background: '#344050',
    // text: 'white',
  },
};