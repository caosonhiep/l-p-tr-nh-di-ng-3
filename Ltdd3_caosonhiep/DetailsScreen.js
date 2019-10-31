import React, { Component } from 'react';
import {
    View, Alert
} from 'react-native'
import {
    Container, Content, Button, Header, Icon, Title,
    Body, Text, Left, Card, CardItem, Label, Right, Thumbnail
} from 'native-base';
import { connect } from 'react-redux'

class DetailsScreen extends Component {
    deleteContact = () => {
        //console.log(this.props.navigation.getParam('item').login.uuid)
        this.props.deleteContact(this.props.navigation.getParam('item').login.uuid)
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        const item = this.props.navigation.getParam('item')

        return (
            <Container>
                <Header style={{ paddingTop: 20 }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ paddingLeft: -20 }}>
                        <Title>

                        </Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('addContactScreen', {
                                first: item.name.first,
                                last: item.name.last,
                                mota: item.mota,
                                gia: item.gia,
                                cell: item.cell,
                                key: item.login.uuid,
                                picture: item.picture.large
                            })}
                        >
                            <Icon type='MaterialIcons' name='edit' />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.deleteContact()}
                        >
                            <Icon type='Ionicons' name='md-trash' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Thumbnail
                        large
                        source={{ uri: item.picture.large }}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={{ alignSelf: 'center' }}>
                        {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1) + ' '}
                        {item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1)}
                    </Text>
                    <Card
                        style={{ marginLeft: 5, marginRight: 5 }}
                    >
                        <CardItem bordered>
                            <Thumbnail
                                large
                                source={{ uri: item.picture.large }}
                                style={{ height: 150, width: 210, alignSelf: 'center' }}
                            />
                        </CardItem>
                        <CardItem bordered>
                            <Icon name='call' style={{ fontSize: 20, color: 'grey', marginLeft: 0 }} />
                            <View>
                                <Text style={{ fontSize: 13 }}>{item.cell}</Text>
                                <Text style={{ fontSize: 13 }}>Gía: {item.gia} VNĐ</Text>
                            </View>
                        </CardItem>
                        <CardItem bordered>
                            <Text style={{ fontSize: 13, textAlign: 'center', }}>Mô tả: {item.mota}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (product) => dispatch({ type: 'DELETE_CONTACT', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(DetailsScreen)