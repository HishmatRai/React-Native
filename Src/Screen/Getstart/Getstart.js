import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Image } from 'react-native'

class GetStart extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../../../images/backgroundimg.png')} style={styles.image}>
                    <View style={{ alignItems: 'center' }}>



                        <Image style={{ width: 150, height: 150, }} source={require('./../../../images/logo.png')} />
                    </View>

                    <Text></Text>




                    <View style={{ alignItems: 'center' }}>

                        <TouchableOpacity
                            style={styles.button}

                            onPress={() => this.props.navigation.navigate("Signup")}

                        >
                            <Text style={{ color: "#211d1e" }}>Get Started </Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => this.props.navigation.navigate("Login")}


                        >
                            <Text style={{ color: "white" }}>Login to Account</Text>
                        </TouchableOpacity>


                    </View>
                </ImageBackground>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f4811f",
        padding: 10,
        width: 300,
        color: "white",
        borderRadius: 30,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#211d1e",
        padding: 10,
        width: 300,
        borderRadius: 30,
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default GetStart
