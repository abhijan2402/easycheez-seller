import React from 'react'
import { View ,Text,StyleSheet,Image} from 'react-native'

function Subscription() {
  return (
    <View>
        <View>
            <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/859/859270.png"}} style={styles.Image}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Image:{
        width:30,
        height:30
    }
})
export default Subscription