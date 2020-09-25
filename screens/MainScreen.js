import React from 'react';
import {
    StyleSheet, 
    Text, 
    View ,
    Button
} from 'react-native';
import UPLBMap from '../components/UPLBMap';

class MainScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <UPLBMap />
                {/* <Button onPress={ () => this.props.navigation.navigate('List of Buildings/Rooms') } title="Go to Map" /> */}
            </View>
        );
    }
}

export default MainScreen;