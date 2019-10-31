/* eslint-disable no-alert */
import React, {Component} from 'react';
import SanPham from './sanpham';
import FetchExample from './FetchExample';
import {AppRegistry} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    };
  }
  UserLoginFunction = () => {
    const {UserEmail} = this.state;
    const {UserPassword} = this.state;
    fetch('http://10.0.2.2:88/quanlyquanan/database/Login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: UserEmail,
        password: UserPassword,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // If server response message same as Data Matched
        if (responseJson === 'yes') {
          //Then open Profile activity and send user email to profile activity.
          alert('Successfully Login');
          AppRegistry.registerComponent('ltdd3', () => FetchExample);
        } else {
          alert(responseJson);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Image
              source={require('../Contents/Image/Logo.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{height: 200, width: 250, resizeMode: 'stretch'}}
            />

            <Text style={styles.title}>Quản Lý Nhà Hàng</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Tên Tài Khoản "
                value={this.state.UserEmail}
                onChangeText={newvalue => this.setState({UserEmail: newvalue})}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập Mật Khẩu"
                secureTextEntry={true}
                value={this.state.UserPassword}
                onChangeText={newvalue =>
                  this.setState({UserPassword: newvalue})
                }
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={event => this.UserLoginFunction(event)}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#a3bded',
  },
  up: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 5, //50% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'rgb(240,48,7)',
    textAlign: 'center',
    width: 400,
    fontSize: 30,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 97, 97)',
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },
  textOR: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
