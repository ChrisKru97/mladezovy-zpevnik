import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {NavigationParams, Song} from '@types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useContextSelector} from 'use-context-selector';
import {SongsContext} from '@providers';
import FavoriteIcon from './FavoriteIcon';

interface Props {
  song: Song;
}

const SongItem: FC<Props> = ({song}) => {
  const {navigate} = useNavigation<NavigationProp<NavigationParams>>();
  const isFavorite = useContextSelector(
    SongsContext,
    c => c.favorites?.[song.number],
  );
  const toggleFavorite = useContextSelector(
    SongsContext,
    c => c.toggleFavorite,
  );

  return (
    <Pressable style={styles.container} onPress={() => navigate('Song', song)}>
      <Text style={styles.title}>
        {song.number}. {song.name}
      </Text>
      <FavoriteIcon
        onToggle={() => toggleFavorite(song.number)}
        isFavorite={isFavorite}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 16},
});

export default SongItem;
