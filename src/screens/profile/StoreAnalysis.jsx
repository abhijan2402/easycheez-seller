import React, { useContext, useState } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { shopProductData } from "../../data/shopProductData";
import DropDownPicker from 'react-native-dropdown-picker';
import { MainContext } from "../../Navigation/MainNavigation";

const{width,height}=Dimensions.get('window')

const StoreAnalysis=()=>{
    const {productAmount,offerAmount} = useContext(MainContext);
    const {orders} = useContext(MainContext);
    console.log(productAmount);

    const [dateOpen, setDateOpen] = useState(false);
    const [monthOpen, setMonthOpen] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [monthValue, setMonthValue] = useState(null);
    const [date, setDate] = useState([
      {label: '31', value: '31'},
      {label: '30', value: '30'}
    ]);
    const [months, setMonths] = useState([
      {label: '1', value: '1'},
      {label: '2', value: '3'}
    ]);

    return(
        <ScrollView style={{felx:1}} >
            <View style={styles.container}>
                <Text style={{color:"black",fontWeight:"bold",fontSize:25}}>Store Analysis</Text>
                <View style={{alignItems:"center"}}>
                    <Image
                        source={require('../../assets/qqq.png')}
                        style={{width:width-40,height:width-40,resizeMode:"contain",borderRadius:20}}            
                    />
                    {/* <View style={{width:width-40,flexDirection: 'row',justifyContent:"space-between",alignItems: 'center',marginVertical:10}}>  
                        <View>
                            <DropDownPicker
                                placeholder="Select Date"
                                style={styles.dropdownsstyle}
                                open={dateOpen}
                                value={dateValue}
                                items={date}
                                setOpen={setDateOpen}
                                setValue={setDateValue}
                                setItems={setDate}
                            />
                        </View>
                        <View>
                            <DropDownPicker
                                placeholder="Select Month"
                                style={styles.dropdownsstyle}
                                open={monthOpen}
                                value={monthValue}
                                items={months}
                                setOpen={setMonthOpen}
                                setValue={setMonthValue}
                                setItems={setMonths}
                            />
                        </View>
                    </View> */}
                    <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                        <View style={styles.shopProductDataCard}>
                            <Text style={{color:"black",fontWeight:"600"}}>Total Products</Text>
                            <Text style={{color:"black",fontWeight:"600"}}>{productAmount}</Text>
                        </View>
                        <View style={styles.shopProductDataCard}>
                            <Text style={{color:"black",fontWeight:"600"}}>Total Offers</Text>
                            <Text style={{color:"black",fontWeight:"600"}}>{offerAmount}</Text>
                        </View>
                        <View style={[styles.shopProductDataCard,{width:width/1.20,height:70}]}>
                            <Text style={{color:"black",fontWeight:"600"}}>Total Orders</Text>
                            <Text style={{color:"black",fontWeight:"600"}}>{orders.length}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"white",
        height
    },
    buttonBody:{
        backgroundColor:"#F05656",
        width:width-80,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    dropdownsstyle:{
        width:width/2.5,
        height:40,
        borderWidth:1,
        borderColor:"#F05656",
        borderRadius:5,
        paddingHorizontal:10,
        fontWeight:"bold",
        color:"black",
        textAlign:"center",
        textAlignVertical:"center"
    },
    shopProductDataCard:{
        backgroundColor:"#D9D9D9",
        width:width/2.5,
        height:width/2.5,
        borderRadius:10,
        alignItems:"center",
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }
})

export default StoreAnalysis;