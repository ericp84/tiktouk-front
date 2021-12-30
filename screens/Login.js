import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const Login = (props) => {
    return (
        <View style={styles.container}>
            <Text>hello login</Text>
            <Text onPress={()=>props.navigation.navigate('BottomNavigator',{screen: 'home'})}>click</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Login;