import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Login(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Login Screen</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={styles.buttonText}>Continue Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131515",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Login;
