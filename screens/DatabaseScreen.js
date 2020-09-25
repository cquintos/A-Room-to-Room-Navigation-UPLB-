import React from 'react';
import {
    StyleSheet, 
    Text, 
    View ,
    Button
} from 'react-native';

class DatabaseScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>THIS IS DATABASE SCREEN WHERE LIST OF LOCATIONS IS</Text>
                <Text>THIS IS DATABASE SCREEN WHERE LIST OF LOCATIONS IS</Text>
                <Text>THIS IS DATABASE SCREEN WHERE LIST OF LOCATIONS IS</Text>
                <Text>THIS IS DATABASE SCREEN WHERE LIST OF LOCATIONS IS</Text>
                <Text>THIS IS DATABASE SCREEN WHERE LIST OF LOCATIONS IS</Text>
                <Button onPress={ () => this.props.navigation.navigate('Main') } title="Go to Search" />
            </View>
        );
    }
}

export default DatabaseScreen;