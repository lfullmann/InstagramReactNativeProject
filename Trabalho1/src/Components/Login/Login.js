import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {

    return (

        <View>
            <View style={{ height: 250, width: 370, alignSelf: "center" }}>
                <View style={{ alignSelf: "center", marginTop: 150 }}>
                    <Image source={require('../../assets/img/Instagram.jpeg')}></Image>
                </View>
                <TextInput
                    style={{ marginTop: 30, height: 35, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Login"
                />
                <TextInput
                    style={{ marginTop: 20, height: 35, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Senha"
                />
                <View style={{ padding: 15 }}>
                    <Button
                        title="Log in"
                        color="#bf1988"
                        accessibilityLabel="Botão de login"
                    />
                </View>
                <View style={{ marginTop: 20, height: 250, width: 370, marginLeft: 130 }} >
                    <Text>Esqueceu a senha?</Text>
                </View>
                <View style={{marginTop: -200, marginLeft:150, flexDirection:"row"}}>
                    <Text style={{textAlignVertical:"center"}}>Entre com </Text>
                <Icon name="facebook-square" size={30} color="#3b5998" />
                </View>
            </View>
        </View>
    );
}

export default Login;