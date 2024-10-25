// components/LanguageItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguageItem = ({ lang }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.langText}>{lang}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    langText: {
        fontSize: 18,
    },
});

export default LanguageItem;
