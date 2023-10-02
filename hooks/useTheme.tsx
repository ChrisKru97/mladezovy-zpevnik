import {useColorScheme} from 'react-native';
import {useMMKVBoolean} from 'react-native-mmkv';
import {dark, light} from '@constants/colors';

const THEME_KEY = '@theme';

const useTheme = () => {
  const systemIsDark = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useMMKVBoolean(THEME_KEY);

  return {
    isDarkModeSet: typeof isDarkMode === 'boolean',
    isDarkMode: isDarkMode ?? systemIsDark,
    setIsDarkMode,
    theme: isDarkMode ? dark : light,
  };
};

export default useTheme;
