import React, { useEffect, useRef, useMemo } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "react-native-paper";

interface ToggleProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  value = false,
  onValueChange = () => {},
  disabled = false,
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  const moveToggle = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [TOGGLE_LEFT_MARGIN, TOGGLE_RIGHT_MARGIN],
      }),
    [animatedValue]
  );

  const { primary: trackColorOn, surfaceDisabled: trackColorOff } =
    useTheme().colors;

  const trackColor = value ? trackColorOn : trackColorOff;
  const opacity = disabled ? 0.5 : 1;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.elastic(0.9),
      useNativeDriver: false,
    }).start();
  }, [value]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={disabled ? undefined : () => onValueChange(!value)}
      >
        <View
          style={[
            styles.toggleContainer,
            { backgroundColor: trackColor, opacity },
          ]}
        >
          <Animated.View
            style={[styles.toggleWheelStyle, { marginLeft: moveToggle }]}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Toggle;

const TOGGLE_LEFT_MARGIN = 3;
const TOGGLE_RIGHT_MARGIN = 22;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleContainer: {
    width: 50,
    height: 30,
    marginLeft: TOGGLE_LEFT_MARGIN,
    borderRadius: 15,
    justifyContent: "center",
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});