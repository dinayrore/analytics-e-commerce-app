import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from "./constants";
import { Fonts, TextProps } from "./types";

export const fonts = (props?: TextProps): Fonts => {
  const fontWeight = props?.fontWeight ?? FontWeight.medium;
  const color = props?.color ?? Colors.black;
  const textDecorationLine = props?.textDecorationLine ?? "none";

  return {
    bodyText: {
      color,
      fontFamily: FontFamily.body,
      fontSize: FontSize.bodyText,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.bodyText,
      textDecorationLine,
    },
    heading: {
      color,
      fontFamily: FontFamily.heading,
      fontSize: FontSize.heading,
      fontWeight: "800",
      letterSpacing: 0,
      lineHeight: LineHeight.heading,
    },
    subheading: {
      color,
      fontFamily: FontFamily.subheading,
      fontSize: FontSize.subheading,
      fontWeight: "800",
      letterSpacing: -2,
      lineHeight: LineHeight.subheading,
    },
    caption: {
      color,
      fontFamily: FontFamily.body,
      fontSize: FontSize.caption,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.caption,
    },
  };
};
