import {FC} from 'react';
import {StatusBar} from 'react-native';
import {Navigation} from '@providers';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTheme} from '@hooks';

const App: FC = () => {
  const {isDarkMode, theme} = useTheme();

  const backgroundColor = theme.primary;

  return (
    <SafeAreaProvider style={{backgroundColor}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
