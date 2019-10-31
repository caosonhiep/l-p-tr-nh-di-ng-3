import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SanPham from './SanPham';

var arraySanPham = [
    {
        id: '1',
        tensp: 'Gongcha 1',
        motasp: 'Tran chau den 1',
        giasp: '20 000'
    },
    {
        id: '2',
        tensp: 'Gongcha 2',
        motasp: 'Tran chau den 2',
        giasp: '20 000'
    },
    {
        id: '3',
        tensp: 'Gongcha 3',
        motasp: 'Tran chau den 3',
        giasp: '20 000'
    },
    {
        id: '4',
        tensp: 'Gongcha 4',
        motasp: 'Tran chau den 4',
        giasp: '20 000'
    },
    {
        id: '5',
        tensp: 'Gongcha 5',
        motasp: 'Tran chau den 5',
        giasp: '20 000'
    },
];

export default class ListSanPham extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={arraySanPham}
                    renderItem={({ item }) =>
                        <SanPham ten={item.tensp} mota={item.motasp} gia={item.giasp}></SanPham>
                    }
                    keyExtractor = {item => item.id}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
