import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import MenuItem from "./components/MenuItem";
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./app/img/bg.jpg")}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>where would you like to travel?</Text>
          </View>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={require("./img/Image1.jpeg")} />
            <MenuItem itemImage={require("./img/Image2.jpeg")} />
            <MenuItem itemImage={require("./img/Image3.jpeg")} />
            <MenuItem itemImage={require("./img/Image4.jpeg")} />
            <MenuItem itemImage={require("./img/Image1.jpeg")} />
            <MenuItem itemImage={require("./img/Image1.jpeg")} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(47,163,218, .4)",
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 28,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,255,255, .1)",
  },
  menuContainer: {
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
