import { DefaultTheme } from '@react-navigation/native';

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#232f3e',
        background: '#f2f2f2',
        text: '#1e1e1e',
        muted: '#8f8f8f',
        secondary: '#febd69',
        lightGray: '#e6e6e6',
        darkGray: '#5e5e5e',
        success: '#00bb00',
        error: '#bb0000',
        warning: '#ff9900',
    },
    fonts: {
        regular: 'Roboto-Regular',
        medium: 'Roboto-Medium',
    },
};