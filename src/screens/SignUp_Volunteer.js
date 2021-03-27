import React from "react";
import { View, Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from "react-native";

function Login(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
        <View style = {{flex : 2.3, justifyContent: "center",}}>
            <Text style = {styles.text}>Sign Up</Text>
            <Text style ={styles.text1}> Volunteer</Text>
        </View>
        <View style = {{flex : 4.5}}>
            <Text>NAME</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text>EMAIL</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text>PASSWORD</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text>AFFILATION</Text>
            <TextInput style={styles.input} ></TextInput>
            <TouchableOpacity style={styles.buttonContainer} onPress = {()=>{}}>
                <Text style={styles.buttontext}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style = {{flex : 0.3 , flexDirection : 'row'}}>
            <Text>Already have an account ? </Text>
            <Text style = {{color : "#162aff"}}>Sign In ?</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#131515",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#000000",
    fontSize: 35,
    fontWeight: "bold",
  },
  text1: {
    color: "#000000",
    fontSize: 25,
    // fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#162aff",
    borderRadius: 15,
    paddingVertical: 25,
    height : 20,
    justifyContent: "center",
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    justifyContent: "center",
  },
  input: {
    height: 35,
    width:300,
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default Login;
