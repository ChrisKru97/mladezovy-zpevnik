import {IconType} from '@types';
import {
  Heart,
  HeartOutlined,
  History,
  Keyboard,
  Search,
  Settings,
  HeartWhite,
} from '@icons';
import {FC} from 'react';

interface Props {
  type: IconType;
}

const Icon: FC<Props> = ({type}) => {
  switch (type) {
    case IconType.Heart:
      return <Heart width={24} height={24} />;
    case IconType.HeartWhite:
      return <HeartWhite width={24} height={24} />;
    case IconType.HeartOutlined:
      return <HeartOutlined width={24} height={24} />;
    case IconType.History:
      return <History width={24} height={24} />;
    case IconType.Keyboard:
      return <Keyboard width={24} height={24} />;
    case IconType.Search:
      return <Search width={24} height={24} />;
    case IconType.Settings:
      return <Settings width={24} height={24} />;
    default:
      return null;
  }
};

export default Icon;
