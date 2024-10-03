import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartData = useSelector((state) => state.reducer);

    // Debugging: Log cartData to ensure it's what you expect


    // Handle undefined cartData
    if (!cartData) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24 }}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{cartData.length}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
    },
});
