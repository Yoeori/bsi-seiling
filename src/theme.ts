import { createTheme, MantineColorsTuple } from "@mantine/core";

// Based on: https://colorhunt.co/palette/050c9c3572ef3abef9a7e6ff
const sea: MantineColorsTuple = [
  "#A7E6FF",
  "#83d8fd",
  "#5ecafb",
  "#3ABEF9",
  "#37a3f6",
  "#368bf2",
  "#3572EF",
  "#2450d4",
  "#152fb9",
  "#050C9C"
];

export const theme = createTheme({
  colors: {
    sea,
  }
});