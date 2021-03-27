import React from "react";
import { View, Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

function Login(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
        <View style = {{flex : 2.3, justifyContent: "center",}}>
            <Text style = {styles.text}>Sign In</Text>
        </View>
        <View style = {{flex : 4.5}}>
            <Text>EMAIL</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text>PASSWORD</Text>
            <TextInput style={styles.input} ></TextInput>
            <TouchableOpacity style={styles.buttonContainer} onPress = {()=>{}}>
                <Text style={styles.buttontext}>Sign In</Text>
            </TouchableOpacity>
            <Text style = {{alignSelf:"center",fontSize:17,marginBottom:15}}>--------- Or Sign in With ---------</Text>
            <View style = {{flexDirection : 'row',justifyContent:"center"}}>
              <View style = {{paddingRight : 10}}>
                <Icon
                  name="facebook-with-circle"
                  size = {38}
                  color = "#162aff">
                </Icon>
              </View>
              <View style = {{paddingHorizontal : 10}}>
                <Icon
                  name="google--with-circle"
                  size = {38}
                  color = "#162aff">
                </Icon>
              </View>
              <View style = {{paddingHorizontal : 10}}>
                <Icon
                  name="twitter-with-circle"
                  size = {38}
                  color = "#162aff">
                </Icon>
              </View>
            </View>
        </View>
        <View style = {{flex : 0.3 , flexDirection : 'row'}}>
            <Text>Dont have an account ? </Text>
            <Text style = {{color : "#162aff"}}>Sign Up ?</Text>
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
    marginVertical:10,
    marginBottom:20,
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
