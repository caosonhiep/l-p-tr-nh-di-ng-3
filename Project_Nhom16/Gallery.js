import React, { Component } from 'react';
import { Image, View, FlatList, ActivityIndicator, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Thumbnail,
    Text, Button, Icon, Left, Body, Right
} from 'native-base';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch(
            'https://next.json-generator.com/api/json/get/E19BHCJcP'
        )
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.foods,
                    },
                    function () { }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, paddingTop: 10 }}>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('TrangChu')}>
                    <Icon name='arrow-back' />
                    <View style={styles.txt}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Mua hàng</Text>
                    </View>
                </Button>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (

                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: item.hinh }} />
                                    <Body>
                                        <Text>{item.ten}</Text>
                                        <Text note>Tác giả: {item.tacgia}</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Image source={{ uri: item.hinh }} style={{ height: 150, flex: 1 }} />
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Button transparent onPress={() => Alert.alert('Lỗi')}>
                                        <Icon active name="thumbs-up" />
                                        <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <View style={styles.container}>
                                    <View style={styles.down}>
                                        <View style={styles.loginButtonTitle}>
                                            <TouchableOpacity style={styles.loginButton}>
                                                <Text style={styles.loginButtonTitle}
                                                    onPress={() => Alert.alert('Mua thành công')}>Mua hàng</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                    )}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
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
})