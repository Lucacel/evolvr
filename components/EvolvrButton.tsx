import { Text, TouchableWithoutFeedback, View } from "react-native";

type EvolvrButtonProps = {
  title?: string;
  onPress?: () => void;
  className?: string;
};

const EvolvrButton = ({ title, onPress, className }: EvolvrButtonProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      className={`w-full ${className}`}
    >
      <View
        className={`bg-moonstone
            justify-center items-center
            rounded-full w-full ${className}`}
      >
        <Text className="color-antiflash_white font-bold text-lg tracking-widest">
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default EvolvrButton;
