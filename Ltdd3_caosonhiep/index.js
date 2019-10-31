import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './App'

import { Provider } from 'react-redux'
import store from './components/Store'

export default function Index() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}