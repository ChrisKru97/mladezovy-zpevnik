import {FC} from 'react';
import {useContextSelector} from 'use-context-selector';
import {SongsContext} from '@providers';
import FavoriteIcon from './FavoriteIcon';

interface Props {
  number: number;
}

const HeaderRight: FC<Props> = ({number}) => {
  const isFavorite = useContextSelector(
    SongsContext,
    c => c.favorites?.[number],
  );
  const toggleFavorite = useContextSelector(
    SongsContext,
    c => c.toggleFavorite,
  );

  return (
    <FavoriteIcon
      white
      onToggle={() => toggleFavorite(number)}
      isFavorite={isFavorite}
    />
  );
};

export default HeaderRight;
