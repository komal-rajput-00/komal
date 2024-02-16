import React from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from './Input';

const Login = ({ navigation }) => {
    return (
        <View>
            <LinearGradient onPress={() => {}} colors={['#42a1f5', '#03bafc', '#42c5f5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: Dimensions.get('window').height * 0.20,
                    width: '100%',
                    alignItems: "center",
                    paddingTop: 40
                }}>
                <Text style={{
                    color: 'white',
                    fontSize: 32,
                    fontWeight: "bold"
                }}>kOmal Login page</Text>
            </LinearGradient>
            <View style={{
                elevation: 10,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 10,
                marginTop: -20,
                paddingVertical: 20,
                paddingHorizontal: 15
            }}>

               <Text style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    color: '#03bafc',
                    textAlign: "center"
                }}>
                    LOGIN
                </Text>

                <Input title="Username" placeholder= "kOmal"
                    keyboard="default" />
                <Input title="Password" placeholder="******"
                    keyboard="default"
                    is_password={true} />
                <Text style={{
                    color: '#03bafc', fontSize: 16,
                    textAlign: 'right'
                }}>Forgot Password?</Text>
                <LinearGradient onPress={() => { }} colors={['#42a1f5', '#03bafc', '#42c5f5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.lineargradientstyle}>
                    <Text style={{ color: '#ffffff', fontSize: 14 }}>LOGIN</Text>
                    
                </LinearGradient>
                <Text style={{
                    color: '#03bafc', fontSize: 14,
                    textAlign: 'center'
                }}>Don't have an account? {'  '}
                    <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
                </Text>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    lineargradientstyle: {
        borderRadius: 100,
        width: 150,
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 100,
        marginBottom: 16
    }
});