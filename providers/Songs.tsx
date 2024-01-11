import {Song} from '@types';
import {FC, PropsWithChildren, useCallback, useEffect} from 'react';
import {MMKV, useMMKVObject} from 'react-native-mmkv';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {createContext} from 'use-context-selector';

type SongsContextType = {
  songs?: Song[];
  favorites?: Record<number, boolean>;
  history?: number[];
  addToHistory: (number: number) => void;
  toggleFavorite: (number: number) => void;
};

export const SongsContext = createContext<SongsContextType>(
  {} as SongsContextType,
);

const SONGS_KEY = '@songs';
const FAVORITES_KEY = '@favorites';
const HISTORY_KEY = '@history';

const SongsContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [songs, setSongs] = useMMKVObject<Song[]>(SONGS_KEY);
  const [favorites, setFavorites] =
    useMMKVObject<Record<number, boolean>>(FAVORITES_KEY);
  const [history, setHistory] = useMMKVObject<number[]>(HISTORY_KEY);

  const addToHistory = useCallback(
    (number: number) =>
      setHistory(history ? [...new Set([number, ...history])] : [number]),
    [history, setHistory],
  );

  const toggleFavorite = useCallback(
    (number: number) => {
      const nextFavorites = {...favorites};
      if (nextFavorites[number]) {
        delete nextFavorites[number];
      } else {
        nextFavorites[number] = true;
      }
      setFavorites(nextFavorites);
    },
    [favorites, setFavorites],
  );

  useEffect(() => {
    if (songs?.length) {
      return;
    }
    (async () => {
      await auth().signInAnonymously();
      const {docs} = await firestore()
        .collection('songs')
        .where('checkRequired', '==', false)
        .orderBy('number')
        .get();
      const data = docs.map(doc => doc.data() as Song);
      setSongs(data);
      const defaultStorage = new MMKV();
      data.forEach(song =>
        defaultStorage.set(`@song@${song.number}`, JSON.stringify(song)),
      );
    })();
  }, [setSongs, songs]);

  return (
    <SongsContext.Provider
      value={{songs, favorites, history, addToHistory, toggleFavorite}}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
