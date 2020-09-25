import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Dimensions, 
  ActivityIndicator
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {
  UrlTile,
  Marker,
  Callout
} from 'react-native-maps';
// import { Button } from 'react-native-elements';


class UPLBMap extends Component {
     

  state = {
    mapLoaded: false,
    region: null
  }
    
  async _getSyncLocationAsync() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted")
      console.log('Permission Denied');
      
    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})

    //current location 
    let currentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      //zooming preferences
      latitudeDelta: 0.0092,
      longitudeDelta: 0.0002,
    }
    this.setState({region: currentLocation})
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    console.log(region);
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  }

  render() {
    if (!this.state.mapLoaded) {
      this._getSyncLocationAsync();
      return (
          <View style={{ flex:1, justifyContent: 'center '}}>
              <ActivityIndicator size="large" />
          </View>
      )
    }
    return (
      <View style={styles.container}>
          <MapView 
              region={this.state.region}
              style={styles.mapStyle}
              onRegionChangeComplete={this.onRegionChangeComplete}
              provider = { null }
              showsUserLocation ={ true }
              showCompasss = { true }    
              rotateEnabled = { true }
          >
            <UrlTile
              urlTemplate = "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maximumZ={50}
              flipY={false}
            />
          </ MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left:20,
        right: 20,
        
    }
});

export default UPLBMap;