import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { theme } from '../styles/theme';
import { DetalhesScreenNavigationProp, Product } from '../types';

type Props = {
    navigate: DetalhesScreenNavigationProp;
};

const ProductDetailScreen = () => {
    const route = useRoute()
    const { id, title, description, brand, category, thumbnail, images } = route.params as Product
    const [titleImage, setTitleImage] = useState<string>(thumbnail)

    return (
        <Card style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Card.Content style={{ justifyContent: "space-around", flex: 1 }}>
                <Image source={{ uri: titleImage }} style={styles.thumbnail} />
                <View style={{ paddingHorizontal: 16, gap: 5, backgroundColor: theme.colors.background }}>
                    <Text style={[styles.title]}>{title}</Text>
                    <Text style={[styles.brand, { color: theme.colors.muted }]}>{brand}</Text>
                    <Text style={[styles.category, { color: theme.colors.muted }]}>{category}</Text>
                    <Text style={[styles.description, { color: theme.colors.text }]}>{description}</Text>
                    <View style={styles.imagesContainer}>
                        <FlatList
                            data={images}
                            renderItem={({ item }) => (
                                <TouchableHighlight activeOpacity={1} underlayColor="none" onPress={() => item !== titleImage ? setTitleImage(item) : {}}>
                                    <Image source={{ uri: item }} style={styles.image} />
                                </TouchableHighlight>
                            )}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button title="Verificar disponibilidade" onPress={() => { }} color={theme.colors.primary} />
                </View>
            </Card.Content>

        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 28,
        height: "100%"
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: 24,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: theme.fonts.medium,
    },
    brand: {
        fontSize: 18,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: theme.fonts.regular,
    },
    category: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: theme.fonts.regular,
    },
    description: {
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.regular,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.medium,
    },
    stock: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: theme.fonts.regular,
    },
    rating: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: theme.fonts.regular,
    },
    imagesContainer: {
        marginTop: 24,
        backgroundColor: theme.colors.background
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: theme.colors.background
    },
});

export default ProductDetailScreen;