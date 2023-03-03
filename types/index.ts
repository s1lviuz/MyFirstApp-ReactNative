import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Início: undefined;
  Catálogo: undefined;
  Detalhes: Product;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Início'>;
export type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Catálogo'>;
export type DetalhesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detalhes'>;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};