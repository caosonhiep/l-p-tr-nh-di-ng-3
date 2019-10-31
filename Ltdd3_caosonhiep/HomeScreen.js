import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {
    Container, Header, Body, Right, Button, Icon, Title, CardItem, Content, Card,
    Left, Thumbnail, Text, List, ListItem, Tab, Tabs
} from 'native-base';
import { connect } from 'react-redux'

class HomeScreen extends Component {
    state = {
        isLoading: true,
    }

    _fetchData = async () => {
        const response = await fetch('https://next.json-generator.com/api/json/get/4kR8SObcP')
        const responseJSON = await response.json()
        this.props.dataAPI(responseJSON.results)
        this.props.sortContacts()
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        this._fetchData()
    }

    render() {
        console.log(this.props.state)
        return (
            <Container>
                <Header style={{ paddingTop: 20 }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('TrangChu')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('addContactScreen')}
                        >
                            <Icon name='add' />
                        </Button>
                    </Right>
                </Header>
                {
                    this.state.isLoading ?
                        <View style={styles.container}>
                            <ActivityIndicator />
                        </View>
                        :
                        <ScrollView>
                            <List
                                dataArray={this.props.state.contacts}
                                renderRow={(item) =>
                                    <ListItem avatar
                                        onPress={() => this.props.navigation.navigate('DetailsScreen', {
                                            item
                                        })}
                                    >
                                        <Left>
                                            <Thumbnail
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 23,
                                                    marginTop: -7,
                                                    marginLeft: -10
                                                }}
                                                source={{ uri: item.picture.large }} />
                                        </Left>
                                        <Body style={{ marginLeft: 40, marginRight: 20 }}>
                                            <Text>
                                                {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1) + ' '}
                                                {item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1) + ' '}
                                            </Text>
                                        </Body>
                                    </ListItem>
                                }
                            >
                            </List>
                        </ScrollView>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataAPI: (product) => dispatch({ type: 'DATA_API', payload: product }),
        sortContacts: (product) => dispatch({ type: 'SORT_CONTACTS', payload: product }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})
