// components/LanguageItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguageItem = ({ lang, experience }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.langText}>{lang}</Text>
            <Text style={styles.experienceText}>{experience}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // Для Android
    },
    langText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experienceText: {
        fontSize: 12,
        color: '#888', // Серый цвет
        marginTop: 5,
    },
});

export default LanguageItem;
