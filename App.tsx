import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CatalogScreen from './screens/CatalogScreen';
import { RootStackParamList } from './types';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { theme } from './styles/theme';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
  },
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Início" component={HomeScreen} />
          <Stack.Screen name="Catálogo" component={CatalogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});