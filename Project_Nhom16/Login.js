import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Alert,
    TextInput, Text, Image,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
//màn hình login
class SignInScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    static navigationOptions = {
        title: 'Hãy đăng nhập lại !',
    };


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.txt}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Đăng nhập</Text>
                    </View>
                    <Image
                        style={{
                            width: 230,
                            height: 200,
                            marginTop: 10,
                            marginBottom: 20
                        }}
                        source={{ uri: 'http://is1.mzstatic.com/image/thumb/Purple6/v4/e9/88/8f/e9888f2d-cba6-5ab4-e1ce-4d6851fd189a/source/300x300bb.jpg' }}
                    />
                </View>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this._signInAsync.bind(this)}
                />
                <Button
                    transparent
                    title={'quay lại trang chủ'}
                    onPress={() => this.props.navigation.navigate('TrangChu')}>
                </Button>
            </View>
        );
    }

    //chức năng login
    _signInAsync = async () => {
        const { username, password } = this.state;
        if (username.match("admin") && password.match("123")) {
            Alert.alert('Login thành công', `${username} + ${password}`);
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } else {
            Alert.alert('Failerere', "Lỗi đăng nhập!-- sai user, pass");
        }

    };
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Admin',
    };

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <View style={styles.txt}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Chào mừng đến với app!</Text>
                    </View>
                    <Image
                        style={{
                            width: 240,
                            height: 200,
                            marginTop: 10,
                            marginBottom: 20
                        }}
                        source={{ uri: 'https://www.osisoft.com/uploadedImages/Micro_Sites/MyOSIsoft/Manage_Users/IMG-icon-admin-300x300-grey.png' }}
                    />
                </View>
                <Button title="xem danh sách món ăn" onPress={this._showMoreApp} />
                <Button title="quay lai đăng nhập" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('HomeScreen');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    txt: {
        marginTop: 20,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        SignInScreen: SignInScreen,
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'SignInScreen',
    }
));
