import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import EyeCloseIcon from "./icons/EyeCloseIcon";
import EyeIcon from "./icons/EyeIcon";

type EvolvrInputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  className?: string;
};

const EvolvrInput = (props: EvolvrInputProps) => {
  const [value, setValue] = useState(props.value || "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    props.secureTextEntry || false
  );
  const translateY = useSharedValue(10);

  const handleFocus = () => {
    translateY.value = withSpring(-24);
  };

  const handleBlur = () => {
    if (value === undefined || value === "") {
      translateY.value = withSpring(10);
    }
  };

  const handleValueChange = (text: string) => {
    setValue(text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <View className="flex w-full mt-10 relative">
      <Animated.Text
        pointerEvents="none"
        style={[animatedStyle]}
        className="dark:color-antiflash_white color-raisin_black text-xl absolute z-10 left-2"
      >
        {props.placeholder}
      </Animated.Text>
      <View
        className="flex flex-row border dark:border-antiflash_white rounded-md w-full relative h-14 justify-center px-2 items-center"
        style={{
          position: "relative",
        }}
      >
        <TextInput
          style={{
            paddingTop: props.secureTextEntry ? 18 : 0,
          }}
          className={`dark:color-antiflash_white color-raisin_black text-xl h-full flex-1 ${props.className}`}
          value={value}
          onChangeText={handleValueChange}
          secureTextEntry={isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {props.secureTextEntry && (
          <TouchableOpacity onPress={handlePasswordVisibilityToggle}>
            {isPasswordVisible ? (
              <EyeIcon className=" dark:color-antiflash_white color-raisin_black" />
            ) : (
              <EyeCloseIcon className=" dark:color-antiflash_white color-raisin_black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EvolvrInput;
