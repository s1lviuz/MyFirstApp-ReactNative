import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { theme } from '../styles/theme';
import { HomeScreenNavigationProp, Product } from 'types';
import { Card } from 'react-native-paper';

const ProductList = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('https://dummyjson.com/products?limit=10');
            setProducts(data.products);
        };
        fetchProducts();
    }, []);

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <TouchableHighlight activeOpacity={1} underlayColor="none" onPress={() => navigation.navigate("Detalhes", item)}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{`R$ ${item.price.toFixed(2)}`}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <Card style={styles.card}>
            <Card.Title title="🔥 Principais Produtos" titleStyle={styles.title} />
            <Card.Content style={styles.cardContent}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 16,
        marginHorizontal: 8,
        height: 230,
    },
    cardContent: {
        paddingHorizontal: 0
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.primary,
        fontFamily: theme.fonts.medium,
    },
    itemContainer: {
        marginRight: 16,
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    itemImage: {
        width: 120,
        height: 120,
        marginBottom: 8,
        resizeMode: 'cover',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4,
        color: theme.colors.primary,
        fontFamily: theme.fonts.medium,
    },
    itemPrice: {
        fontSize: 14,
        textAlign: 'center',
        color: theme.colors.success,
        fontFamily: theme.fonts.medium,
    },
});

export default ProductList;
