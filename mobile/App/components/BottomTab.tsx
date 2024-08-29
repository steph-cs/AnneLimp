import { View, Text, Pressable } from 'react-native';
import { LightTheme } from '../../assets/theme/LightTheme';
import { Icon } from 'react-native-paper';

export function BottomTab({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', backgroundColor: LightTheme.colors.primary, paddingHorizontal: 10, paddingVertical: 15 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icons = { home: 'home-variant-outline', agendamento: 'calendar-month-outline', perfil: 'account-outline' }

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{}}
            key={index}

          >
            <View style={{
              backgroundColor: isFocused ? LightTheme.colors.white : null,
              borderRadius: 20,
              paddingHorizontal: 25,
              paddingVertical: 6
            }}>
              <Icon source={icons[label]} color={isFocused ? LightTheme.colors.primary : LightTheme.colors.white} size={24} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}