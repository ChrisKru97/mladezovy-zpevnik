import {NavigationContainer} from '@react-navigation/native';
import {Favorites, History, Home, Song} from '@screens';
import {FC, PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@hooks';

const Stack = createNativeStackNavigator();

const Navigation: FC<PropsWithChildren> = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Mládežový zpěvník',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 28,
              fontWeight: 'normal',
            },
          }}
          component={Home}
        />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Song" component={Song} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
