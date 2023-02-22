import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Header({title}) {
  return (
  <>
    <View style={styles.Header}>
        <Text style={styles.HeaderText}>{title}</Text>
    </View>
    <View>
        <Image source={{uri:"https://img.freepik.com/free-vector/logistics-concept-illustration_114360-1561.jpg"}} style={styles.Image}/>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
Header: {
    height: windoHeight / 8,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:1
},
HeaderText: {
    fontSize: 25,
    color: "black",
    fontWeight: "700"
},
Image:{
    width:windoWidth,
    height:windoHeight/3.5,

}
})
export default Header