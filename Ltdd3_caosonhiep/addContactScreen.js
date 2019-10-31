import React, { Component } from 'react';
import { Textarea, Toast, Container, Content, Form, Item, Input, Label, Button, Text, Root, Header, Left, Right, Icon, Title, Body } from 'native-base';

import { connect } from 'react-redux'
class addContactScreen extends Component {
    state = {
        bearbeiten: false,
        first: this.props.navigation.getParam('first'),
        last: this.props.navigation.getParam('last'),
        cell: this.props.navigation.getParam('cell'),
        gia: this.props.navigation.getParam('gia'),
        mota: this.props.navigation.getParam('mota')
    }

    addContact = () => {
        if (this.state.last != null && this.state.last != '') {
            this.props.addContact({
                "name": {
                    "first": this.state.first == null ? '' : this.state.first,
                    "last": this.state.last
                },
                "mota": this.state.mota,
                "gia": this.state.gia,
                "cell": this.state.cell,
                "picture": {
                    "large": "https://giadinh.tv/wp-content/uploads/2016/12/7-ngay-giam-can-cap-toc-bang-trung-ga-luoc-4-e1482440277743.jpg"
                },
                "login": {
                    "uuid": this.props.state.contactKey
                },
            })
            this.props.updateContactKey()
            this.props.sortContacts()
            this.props.navigation.navigate('HomeScreen')
        } else {
            Toast.show({
                text: 'Tên không để trống!',
                buttonText: 'Okay',
                type: 'danger'
            })
        }
    }

    editContact = () => {
        this.props.editContact({
            "name": {
                "first": this.state.first,
                "last": this.state.last
            },
            "mota": this.state.mota,
            "gia": this.state.gia,
            "cell": this.state.cell,
            "picture": {
                "large": this.props.navigation.getParam('picture')
            },
            "login": {
                "uuid": this.props.navigation.getParam('key')
            },
        })
        this.props.sortContacts()
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        const first = this.props.navigation.getParam('first')
        const last = this.props.navigation.getParam('last')
        const cell = this.props.navigation.getParam('cell')
        const gia = this.props.navigation.getParam('gia')
        const mota = this.props.navigation.getParam('mota')

        return (
            <Root>
                <Container>
                    <Content>
                        <Header style={{ paddingTop: 20 }}>
                            <Left>
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                                >
                                    <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                                <Title></Title>
                            </Body>
                        </Header>
                        <Form>

                            <Item stackedLabel>
                                <Label>Tên món ăn</Label>
                                <Input
                                    defaultValue={last}
                                    onChangeText={(last) => this.setState({ last })}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Số điện thoại</Label>
                                <Input
                                    defaultValue={cell}
                                    onChangeText={(cell) => this.setState({ cell })}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Giá (VNĐ)</Label>
                                <Input
                                    defaultValue={gia}
                                    onChangeText={(gia) => this.setState({ gia })}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Mô tả</Label>
                                <Input
                                    defaultValue={mota}
                                    onChangeText={(mota) => this.setState({ mota })}
                                />
                            </Item>
                            <Button
                                light
                                style={{ margin: 15, backgroundColor: 'rgb(221, 97, 97)' }}
                                onPress={() => last == null ? this.addContact() : this.editContact()}
                            >
                                <Text> {last == null ? 'THÊM' : 'SỬA'} </Text>
                            </Button>
                        </Form>
                    </Content>
                </Container>
            </Root>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (product) => dispatch({ type: 'ADD_CONTACT', payload: product }),
        editContact: (product) => dispatch({ type: 'EDIT_CONTACT', payload: product }),
        updateContactKey: (product) => dispatch({ type: 'UPDATE_CONTACT_KEY', payload: product }),
        sortContacts: (product) => dispatch({ type: 'SORT_CONTACTS', payload: product }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addContactScreen)
