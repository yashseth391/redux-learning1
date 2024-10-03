import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ADD_ITEM } from './constant'
export function addtocart(item) {

    return {
        type: ADD_ITEM,
        data: item //joh bhi iska color kya hai ,price kya hai, name kya hai,quantity kya hai
    }
}