import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {IconType, Song} from '@types';
import Icon from './Icon';

interface Props {
  song: Song;
}

const SongItem: FC<Props> = ({song}) => {
  // const isFavorite = false;

  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>
        {song.number}. {song.name}
      </Text>
      <Icon type={IconType.HeartOutlined} />
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
