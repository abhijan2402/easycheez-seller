import React from 'react'
import { Text, View ,StyleSheet,Dimensions} from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function CheckBoxes() {
    return (
        <View style={styles.MainBox}>
            <Text style={styles.SubsText}>Subscription</Text>
            <View>
            {/* <CheckBox
          value="hi"
        //   onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
                <Text style={styles.PriceText}>499/- per month</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainBox:{
        marginHorizontal:10,
        backgroundColor:"#F0F0F0",
        marginVertical:25,
        height:windoHeight/4,
        borderRadius:9
    },
    SubsText:{
        fontSize:25,
        color:"black",
        fontWeight:"700",
        marginHorizontal:15,
        marginVertical:10
    },
    PriceText:{
        fontSize:18,
        color:"black",
        marginHorizontal:15
    }
})
export default CheckBoxes