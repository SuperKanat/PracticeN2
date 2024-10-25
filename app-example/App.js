// App.js
import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import LanguageItem from './LanguageItem';

const langs = [
    { id: '1', lang: 'JavaScript' },
    { id: '2', lang: 'Python' },
    { id: '3', lang: 'Java' },
    { id: '4', lang: 'C++' },
    { id: '5', lang: 'Ruby' },
    { id: '6', lang: 'Go' },
    // добавь другие языки при необходимости
];

const App = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // Здесь можно добавить логику обновления данных
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    const renderItem = ({ item }) => (
        <LanguageItem lang={item.lang} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={langs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});

export default App;
