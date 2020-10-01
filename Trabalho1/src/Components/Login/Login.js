import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

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
                />
                <TextInput
                    style={{ marginTop: 20, height: 35, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
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
                <View>
                    <Text>uahuadhuashdua</Text>
                </View>
            </View>
        </View>


    );
}

export default Login;