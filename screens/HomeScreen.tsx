import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HomeScreenNavigationProp, Product } from '../types';
import { theme } from '../styles/theme';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {

  const handlePressCatalog = () => {
    navigation.navigate('Catálogo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Catálogo de produtos" onPress={handlePressCatalog} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.primary,
    marginBottom: 16,
    fontFamily: theme.fonts.medium,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
  },
  text: {
    fontSize: 24,
  },
});