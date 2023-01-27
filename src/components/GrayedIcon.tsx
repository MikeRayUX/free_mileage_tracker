import { useAssets } from "expo-asset";
import { Image } from "react-native";

const GrayedIcon = () => {
  const [image, error] = useAssets(require("../../assets/grayed-out-icon.png"));
  return image ? <Image source={image} style={{width: 100, height: 100}} /> : null;
};

export default GrayedIcon;
