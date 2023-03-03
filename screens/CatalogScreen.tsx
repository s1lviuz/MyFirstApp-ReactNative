import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';
import { theme } from '../styles/theme';
import { CatalogScreenNavigationProp, Product } from 'types';

type Props = {
  navigation: CatalogScreenNavigationProp;
};

export default function CatalogScreen({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableHighlight activeOpacity={1} underlayColor="none" onPress={() => navigation.navigate("Detalhes", item)}>
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableHighlight>

  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar produtos"
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Text style={styles.title}>Catálogo de produtos</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  searchbar: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 11,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginHorizontal: 16,
    marginVertical: 16,
    fontFamily: theme.fonts.medium,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightGray,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  brand: {
    fontSize: 16,
    marginBottom: 8,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.regular,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: theme.fonts.regular,
  },
});