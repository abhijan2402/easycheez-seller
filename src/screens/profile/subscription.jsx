import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { View ,Text,StyleSheet,Image,Dimensions, TouchableOpacity} from 'react-native'
import Header from '../../components/Home/Header'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Subscription() {
    const route=useRoute();
    const {userData} = route.params;
    const [CheckBox1, setCheckBox1] = useState(false)
    const [CheckBox2, setCheckBox2] = useState(false)
    const Check=()=>{
        setCheckBox2(false)
        setCheckBox1(true)
    }
    const Check2=()=>{
        setCheckBox1(false)
        setCheckBox2(true)
    }
  return (
    <View style={styles.MainView}>
        <Header title="Subscription"/>
        <View>
            <Text style={styles.NameText}>Hello, {userData.FirstName} {userData.LastName}</Text>
        </View>
        <TouchableOpacity style={[styles.MainBox,{borderWidth:CheckBox1?2:0,borderColor:CheckBox1?"#F05656":"green"}]} onPress={Check} >
            <Text style={styles.SubsText}>Subscription-</Text>
             <Text style={styles.PriceText}>499/- per month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.MainBox,{borderWidth:CheckBox2?2:0,borderColor:CheckBox2?"#F05656":"green"}]} onPress={Check2}>
            <Text style={styles.SubsText}>Commission-</Text>
            <Text style={styles.PriceText}>5% on every order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
            <Text style={styles.BtnText}>Proceed</Text>
        </TouchableOpacity>
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
    },
    MainBox:{
        marginHorizontal:10,
        backgroundColor:"#F0F0F0",
        marginVertical:25,
        borderRadius:9,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20,
        justifyContent:"space-around"
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
    },
    Btn:{
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
        backgroundColor: "#F05656",
        paddingVertical: 10,
        borderRadius: 8
    },
    BtnText:{
        color: "white",
        fontWeight: "700",
        fontSize: 17
    }
})
export default Subscription