            import  React from 'react';
            import { View, Text,TextInput} from 'react-native';
            
            
            const Input =  ({title,placeholder, keyboard,is_password}) => {
                return (
                    <View style={{ marginVertical: 10}}>
                    <Text style={{ fontSize: 16, color: '#03bafc'}}>{title}</Text>
                    <TextInput
                     placeholder='placeholder'
                    placeholderTextColor='gray'
                     style={{
                        color:"#000000",
                        borderBottomColor: "#03bafc",
                        borderBottomWidth: 1, 
                        paddingVertical: 0,
                        marginTop: 5}} 
                        secureTextEntry={is_password}
                        keyboardType={keyboard}
                        />
                </View>
                );
              }
            
              export default Input;