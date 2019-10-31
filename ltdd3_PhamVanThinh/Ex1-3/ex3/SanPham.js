import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
//import MaterialHeader2 from "../components/MaterialHeader2";
//import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

export default class SanPham extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>

        <View
          style={[
            styles.stack,
            {
              marginTop: 10.81,
              marginLeft: 0.86,
              height: 89.99,
              width: 360.86
            }
          ]}
        >
          <View style={styles.items}>
            <Text style={styles.tieude}>{this.props.ten}</Text>
            <Text style={styles.gioithieu}>{this.props.mota}</Text>
            <Text style={styles.gia}>{this.props.gia}</Text>
          </View>
          <Image
            source={require("./signature-milk-tea-gong-cha-1554379089.jpg")}
            resizeMode="contain"
            style={styles.image3}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader2: {
    width: 375,
    height: 56,
    marginLeft: -2
  },
  image2: {
    width: 273,
    height: 161,
    marginTop: 13,
    marginLeft: 32
  },
  text: {
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    marginTop: 24.08,
    marginLeft: 32
  },
  stack: {
    position: "relative"
  },
  items: {
    top: 0.19,
    left: 1.14,
    width: 360,
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderRadius: 5
  },
  tieude: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 125.28
  },
  gioithieu: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 125.28
  },
  gia: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 125.28
  },
  image3: {
    top: 0.19,
    left: 0.14,
    width: 101,
    height: 90,
    position: "absolute"
  },
  rect3: {
    top: 0.2,
    left: 0.14,
    width: 360,
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  text5: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 12.2,
    marginLeft: 125.14
  },
  text6: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 125.14
  },
  text7: {
    color: "rgba(197,81,81,1)",
    fontSize: 16,
    marginTop: 11,
    marginLeft: 125.14
  },
  image4: {
    top: 1.2,
    left: 0.14,
    width: 101,
    height: 90,
    position: "absolute"
  },
  materialIconTextButtonsFooter: {
    width: 375,
    height: 56,
    marginTop: 123.4,
    marginLeft: -9
  }
});
