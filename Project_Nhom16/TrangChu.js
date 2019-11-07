import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class TrangChu extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <View>
                        <Image
                            style={{
                                width: 230,
                                height: 200,
                                marginTop: 10
                            }}
                            source={{ uri: 'http://is1.mzstatic.com/image/thumb/Purple6/v4/e9/88/8f/e9888f2d-cba6-5ab4-e1ce-4d6851fd189a/source/300x300bb.jpg' }}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.down}>
                        <View style={styles.loginButtonTitle}>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('Login')}>Đăng nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('Gallery')}>Thư viện ảnh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('HomeScreen')}>Danh sách món ăn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(92, 99,216, 1)"
    },
    up: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    down: {
        //flex: 8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        color: 'rgb(255,119,34)',
        textAlign: 'center',
        //width: 400,
        fontSize: 23
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,
        backgroundColor: 'rgb(221, 97, 97)'
    },

    loginButton: {
        width: 200,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

        backgroundColor: 'rgb(221, 97, 97)'
    },
    title: {
        color: 'white',
        color: 'rgb(255,119,34)',
        textAlign: 'center',
        width: 400,
        fontSize: 23
    },
    loginButtonTitle: {
        fontSize: 18,
        color: 'white'
    },

});
