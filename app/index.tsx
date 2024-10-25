// App.js
import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import LanguageItem from '/home/observer/ProgrammingProjects/ReactNative/LanguageApp/components/LanguageItem.jsx';
const langs = [
    { id: '1', lang: 'JavaScript', experience: '1 год опыта' },
    { id: '2', lang: 'Python', experience: '6 месяцев опыта' },
    { id: '3', lang: 'Java', experience: '2 года опыта' },
    { id: '4', lang: 'C++', experience: '1.5 года опыта' },
    { id: '5', lang: 'Ruby', experience: '1 год опыта' },
    { id: '6', lang: 'Go', experience: '2 месяца опыта' },
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % langs.length);
            setRefreshing(false);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={[langs[currentIndex]]} // Передаем только один элемент
                renderItem={({ item }) => (
                    <LanguageItem lang={item.lang} experience={item.experience} />
                )}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;




//import LanguageItem from '/home/observer/ProgrammingProjects/ReactNative/LanguageApp/components/LanguageItem.jsx';