import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from './Action'

const Product = ({ item }) => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {

        dispatch(addtocart(item));
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            <Button title='Add to cart' onPress={() => handleAddToCart(item)} />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "red",
        borderBottomWidth: 1
    }
})