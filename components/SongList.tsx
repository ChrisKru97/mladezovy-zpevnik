import {FlashList} from '@shopify/flash-list';
import {Song} from 'types';
import {FC} from 'react';
import SongItem from './SongItem';

interface Props {
  songs: Song[];
}

const SongList: FC<Props> = ({songs}) => {
  return (
    <FlashList
      data={songs}
      renderItem={({item}) => <SongItem song={item} />}
      estimatedItemSize={51}
    />
  );
};

export default SongList;
