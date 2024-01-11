import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationParams} from '@types';
import {FC, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const text = `[C]Stále som v zajatí 
[G]Múrov ktoré dnes mám 
[C]V Tebe však verný chem zostať[G] 
[C]Keď zmenu nastolíš 
[G]zodvihneš dnes môj pád 
[C]Ty si verný Boh Víťazný[G]

[C]zasľúbil si 
Že ty sa [G]postaráš[C]Si verný Boh 
[C]Veď v tvojich [D]rukách 
[G]Je moje bezpečie, Kráľ [C]ktorý nezlihá`;

const Song: FC = () => {
  const [fontSize, setFontSize] = useState(20);
  const {
    params: {name, number, withChords, withoutChords},
  } = useRoute<RouteProp<NavigationParams, 'Song'>>();

  const asArray = [...text.matchAll(/\[([^\]]+)\]([^[]+)/g)];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {paddingTop: 12 + fontSize * 0.6},
      ]}>
      {asArray.map(([, chord, part], index) => {
        const trimmed = part.trim();
        return (
          <View style={{height: fontSize * 2}} key={index}>
            <View
              style={[
                styles.absolute,
                {
                  top: -(fontSize * 0.8),
                },
                !trimmed && {left: -(fontSize * 0.8)},
              ]}>
              <Text style={[styles.chord, {fontSize: 0.8 * fontSize}]}>
                {chord}
              </Text>
            </View>
            {!!trimmed && (
              <Text style={[{fontSize, paddingRight: fontSize * 0.2}]}>
                {trimmed}
              </Text>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  container: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chord: {
    fontWeight: 'bold',
  },
});

export default Song;
