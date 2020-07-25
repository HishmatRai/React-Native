import React from 'react'
import {View , Text } from 'react-native'
import {Button } from 'native-base';

class Notification extends React.Component {
    render(){

        return(
            <View>
                <Text>Notification</Text>
                {/* <Button  title = "Get Start"/> */}
                <Button primary><Text> Primary </Text></Button>


            </View>

        )
    }
}


export default Notification