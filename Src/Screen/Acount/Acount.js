import React from 'react'
import {View , Text } from 'react-native'
import {Button } from 'native-base';

class Account extends React.Component {
    render(){

        return(
            <View>
                <Text>Account</Text>
                {/* <Button  title = "Get Start"/> */}
                <Button primary><Text> Primary </Text></Button>


            </View>

        )
    }
}


export default Account