import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {

    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, marginTop: 10 }}>

                    <Icon name="paper-plane" size={22} color="#a8a4a3" />
                    <Image source={require('../assets/img/Instagram.jpeg')}></Image>
                    <Icon name="camera" size={22} color="#a8a4a3" />
                </View>
                <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    <Icon name="user-circle" size={30} color="#a8a4a3" />
                    <Icon name="user-circle" size={30} color="#a8a4a3" />
                    <Icon name="user-circle" size={30} color="#a8a4a3" />
                    <Icon name="user-circle" size={30} color="#a8a4a3" />
                    <Icon name="user-circle" size={30} color="#a8a4a3" />
                </View>
            </View>
            <View style={{ flex: 4, width: "100%", justifyContent: "center" }}>
                <ScrollView style={{ width: "100%" }}>
                    <Image style={{ height: 250, width: 370, alignSelf: "center" }} source={require('../assets/Imagem.png')} />
                    <View style={{ marginTop: 8, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon style={{ marginRight: 10 }} name="heart" size={20} color="#a8a4a3" />
                            <Icon style={{ marginRight: 10 }} name="comment" size={20} color="#a8a4a3" />
                            <Icon name="paper-plane" size={20} color="#a8a4a3" />
                        </View>
                        <View>
                            <Icon style={{ flex: 3 }} name="bookmark" size={20} color="#a8a4a3" />
                        </View>
                    </View>
                    <Text style={{ marginBottom: 9, width: 370, alignSelf: "center" }}>
                        Nullam lorem ante, pellentesque tempor ornare vehicula, finibus sed sem.
                        Fusce finibus tempus dolor, ut pellentesque enim gravida nec. Suspendisse rutrum
            purus eu tincidunt semper.</Text>

                    <Image style={{ height: 250, width: 370, alignSelf: "center" }} source={require('../assets/Imagem2.png')} />
                    <View style={{ marginTop: 8, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon style={{ marginRight: 10 }} name="heart" size={20} color="#a8a4a3" />
                            <Icon style={{ marginRight: 10 }} name="comment" size={20} color="#a8a4a3" />
                            <Icon name="paper-plane" size={20} color="#a8a4a3" />
                        </View>
                        <View>
                        </View>
                        <Icon name="bookmark" size={20} color="#a8a4a3" />
                    </View>
                    <Text style={{ marginBottom: 9, width: 370, alignSelf: "center" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia nisi non elit gravida,
                        eu bibendum enim varius. Donec molestie, nunc sit amet tincidunt accumsan, libero eros finibus erat,
            consequat pretium risus tellus et ligula.</Text>
                </ScrollView>
            </View>

            <View style={{ flexDirection: "row", flex: 0.5, alignItems: "center", justifyContent: "space-around" }}>
                <Icon name="home" size={28} color="#a8a4a3" />
                <Icon name="search" size={28} color="#a8a4a3" />
                <Icon name="plus-square" size={28} color="#a8a4a3" />
                <Icon name="heart" size={28} color="#a8a4a3" />
                <Icon name="user-circle" size={28} color="#a8a4a3" />
            </View>
        </View>
    );
}

export default Main;