import { OpaqueColorValue, StyleProp } from "react-native";
import { theme } from "theme/theme";
import { renderIcon } from "./helpers";

export interface IconProps {
  type: string;
  name: any;
  onPress?: () => void;
  style?: StyleProp<any>;
  color?: string | OpaqueColorValue | undefined;
  size?: number | undefined;
}

const Icon = ({
  type,
  name,
  onPress,
  style,
  color = theme.colors.white,
  size = theme.size.sm,
}: IconProps) => {
  return renderIcon({ type, name, onPress, style, color, size });
};

export default Icon;
