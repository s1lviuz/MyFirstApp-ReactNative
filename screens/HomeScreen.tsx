import React from 'react';
import { Button, StyleSheet, Image, View, Text } from 'react-native';
import { HomeScreenNavigationProp } from '../types';
import { theme } from '../styles/theme';
import ProductList from '../components/ProductList';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {

  const handlePressCatalog = () => {
    navigation.navigate('Catálogo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          accessibilityLabel="React logo"
          source={require('../assets/LogoMenu.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>Sua empresa aqui</Text>
        <ProductList navigation={navigation} />
      </View>
      <Button title="Catálogo de produtos" onPress={handlePressCatalog} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 28
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 16,
    alignItems: 'center'
  },
  logo: {
    height: 150,
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