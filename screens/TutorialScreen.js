import React from 'react';
import {
    StyleSheet, 
    Text, 
    View ,
    Button
} from 'react-native';

class TutorialScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>THIS IS TUTORIAL SCREEN WHERE TUTORIAL IS</Text>
                <Text>THIS IS TUTORIAL SCREEN WHERE TUTORIAL IS</Text>
                <Text>THIS IS TUTORIAL SCREEN WHERE TUTORIAL IS</Text>
                <Text>THIS IS TUTORIAL SCREEN WHERE TUTORIAL IS</Text>
                <Text>THIS IS TUTORIAL SCREEN WHERE TUTORIAL IS</Text>
                {/* <Button onPress={ () => this.props.navigation.navigate('List of Buildings/Rooms') } title="Go to Map" /> */}
            </View>
        );
    }
}

export default TutorialScreen;