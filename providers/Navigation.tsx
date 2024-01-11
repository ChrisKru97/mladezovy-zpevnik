import {NavigationContainer} from '@react-navigation/native';
import {Favorites, History, Home, Song} from '@screens';
import {FC, PropsWithChildren} from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useTheme} from '@hooks';
import {NavigationParams} from '@types';
import {StyleSheet} from 'react-native';
import {HeaderRight} from '@components';

const Stack = createNativeStackNavigator<NavigationParams>();

const Navigation: FC<PropsWithChildren> = () => {
  const {theme} = useTheme();

  const headerStyle = {
    backgroundColor: theme.primary,
  };

  const commonOptions: NativeStackNavigationOptions = {
    headerStyle,
    headerTitleStyle: styles.title,
    headerTintColor: 'white',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center' as const,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Mládežový zpěvník',
            ...commonOptions,
            headerTitleStyle: styles.mainTitle,
          }}
          component={Home}
        />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen
          name="Song"
          component={Song}
          options={({route}) => ({
            title: route.params.name,
            ...commonOptions,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => <HeaderRight number={route.params.number} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 28,
    fontWeight: 'normal',
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default Navigation;
