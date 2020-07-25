import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { Image } from 'react-native'
import axios from 'axios'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        console.log("fjnvsjln")
        axios.get(`http://localhost:3001/login/getUser`)
      .then(res => {
        const nameList = res;
        console.log("data" ,nameList)
      })
  }
    
    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <ImageBackground source={require('./../../../images/backgroundimg1size-01.png')} style={styles.image}>
                            <View style={{ alignItems: 'center' }}>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>


                                <Image style={{ width: 150, height: 150, }} source={require('./../../../images/logo.png')} />
                            </View>

                            <Text></Text>




                            <View style={{ alignItems: 'center' }}>
                                <Text></Text>

                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"

                                />
                                <Text></Text>

                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Password"

                                />
                                <Text></Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.props.navigation.navigate("Home")}
                                >
                                    <Text style={{ color: "#211d1e" }}>Sign In </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.button2}

                                >
                                    <Text style={{ color: "#211d1e", }}>Forgot your password </Text>
                                </TouchableOpacity>

                                <Text></Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', width: 300 }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                    <View>
                                        <Text style={{ width: 50, textAlign: 'center' }}>Or </Text>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                </View>



                                <Text></Text>

                                <TouchableOpacity
                                    style={styles.button3}
                                    onPress={() => this.props.navigation.navigate("Signup")}

                                >
                                    <Text style={{ color: "white" }}>Sign Up </Text>
                                </TouchableOpacity>


                            </View>
                        </ImageBackground>

                    </ScrollView></SafeAreaView>
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
        padding: 1,
        width: 300,

    },
    button3: {
        alignItems: "center",
        padding: 10,
        width: 300,
        backgroundColor: "#211d1e",
        borderRadius: 30,


    },
    countContainer: {
        alignItems: "center",
        padding: 10,
    },
    textInput: {
        height: 40,
        borderColor: '#f4811f',
        borderWidth: 1,
        width: 300,
        borderRadius: 30,
        padding: 10,

    }

});

export default Login









