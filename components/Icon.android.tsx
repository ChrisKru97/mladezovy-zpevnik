import {IconType} from '@types';
import {
  Heart,
  HeartOutlined,
  History,
  Keyboard,
  Search,
  Settings,
} from '@icons';
import {FC} from 'react';
interface Props {
  type: IconType;
}

const Icon: FC<Props> = ({type}) => {
  switch (type) {
    case IconType.Heart:
      return <Heart width={26} height={26} />;
    case IconType.HeartOutlined:
      return <HeartOutlined width={26} height={26} />;
    case IconType.History:
      return <History width={26} height={26} />;
    case IconType.Keyboard:
      return <Keyboard width={26} height={26} />;
    case IconType.Search:
      return <Search width={26} height={26} />;
    case IconType.Settings:
      return <Settings width={26} height={26} />;
    default:
      return null;
  }
};

export default Icon;
