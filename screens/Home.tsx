import {SongList} from '@components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Song} from '@types';
import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

const Home: FC = () => {
  const [songs, setSongs] = useState<Song[]>();

  useEffect(() => {
    (async () => {
      await auth().signInAnonymously();
      const {docs} = await firestore()
        .collection('songs')
        .where('checkRequired', '==', false)
        .orderBy('number')
        .get();
      setSongs(docs.map(doc => doc.data() as Song));
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {!!songs && <SongList songs={songs} />}
    </View>
  );
};

export default Home;
