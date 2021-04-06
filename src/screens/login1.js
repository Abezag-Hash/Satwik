import * as React from "react";
import { View, StyleSheet,TouchableOpacity ,Text} from "react-native";
import MapView from "react-native-maps";

var region = {
  latitude: 28.6139,
  longitude: 77.209,
  latitudeDelta: 0.5,
  longitudeDelta: 0.004,
};

var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#131515",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#232626",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#2a2b2b",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];


const width_proportion = '80%';
const height_proportion = '40%';

function MapScreen() {
  return (
    <View>
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        initialRegion={region}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      {/* <View style = {{position:"absolute"}}>
        <View style = {{flex : 2}}>
        <View style={styles.buttonContainer} >
              <Text style={styles.buttontext}>Add Pickup Point</Text>
          </View>
        </View>
        <View style = {{flex:5 , backgroundColor: "#162aff",}}>
          <View style={styles.buttonContainer} >
              <Text style={styles.buttontext}>Add Pickup Point</Text>
          </View>
        </View>
        
      </View> */}
      {/* <View style={styles.container1}>
       

       <View style={styles.RectangleShapeView} />

     </View> */}
     </View>
     <View style={styles.screen}>
        <View style={styles.box}>
          <Text style={styles.text}>
            {width_proportion} of width{'\n'}
            {height_proportion} of height
          </Text>
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ebebeb",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#162aff",
    color: "white",
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    alignItems:"center"
  },
  container1: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    position:"absolute",
  },
 
  RectangleShapeView: {
  flex:0.8,
  // marginTop: 20,
  width: '80%',
  height: 120,
  backgroundColor: '#FFC107'
 
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A9BD4',
    position:"absolute",
  },
  box: {
    width: width_proportion,
    height: height_proportion,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D2EC',
  },
  text: {
    fontSize: 18,
  },
});

export default MapScreen;
