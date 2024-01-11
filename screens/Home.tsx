import {SongList, BottomBar} from '@components';
import {SongsContext} from '@providers';
import {FC, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useContextSelector} from 'use-context-selector';

const Home: FC = () => {
  const [barHeight, setBarHeight] = useState(0);
  const songs = useContextSelector(SongsContext, c => c.songs);

  return (
    <View style={styles.flex}>
      {songs ? (
        <SongList songs={songs} paddingBottom={barHeight} />
      ) : (
        <ActivityIndicator style={styles.flex} size="large" />
      )}
      <BottomBar setHeight={setBarHeight} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default Home;
