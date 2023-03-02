import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Header({title}) {
  return (
  <>
    <View style={styles.Header}>
        {/* <Text style={styles.HeaderText}>{title}</Text> */}
      <Text style={styles.HeaderText}>Yum Grocer</Text>
      <Image
        style={{width:40,height:40}}
        source={require('../../assets/bar_code.png')}
      />
    </View>
  </>
  )
}
const styles = StyleSheet.create({
Header: {
    height: windoHeight / 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal:20
    // borderWidth:1
},
HeaderText: {
    fontSize: 25,
    color: "black",
    fontWeight: "700"
},
})
export default Header