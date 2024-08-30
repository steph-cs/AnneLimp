import { StyleSheet } from "react-native";
import { LightTheme } from "../../assets/theme/LightTheme";

export const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: LightTheme.colors.white
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 'auto',
    marginVertical: 20,
    width: 108,
    height: 130
  },
  
})