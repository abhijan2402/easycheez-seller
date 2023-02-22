import React from 'react'
import { View ,Text,StyleSheet,Image,Dimensions} from 'react-native'
import Header from '../../components/Home/Header'
import CheckBoxes from '../../components/Subscription/checkBox';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Subscription() {
  return (
    <View style={styles.MainView}>
        <Header title="Subscription"/>
        <View style={{borderWidth:1}}>
            <Text style={styles.NameText}>Hello Abhishek</Text>
        </View>
        <CheckBoxes/>
    </View>
  )
}
const styles = StyleSheet.create({
    MainView:{
        width:windoWidth,
        height:windoHeight,
        backgroundColor:"white"
    },
    Image:{
        width:30,
        height:30
    },
    NameText:{
        fontSize:20,
        color:"black",
        fontWeight:"600",
        marginHorizontal:20
    }
})
export default Subscription