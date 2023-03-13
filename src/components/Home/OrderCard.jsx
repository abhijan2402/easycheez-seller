import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const {width,height}=Dimensions.get('window');

const OrderCard=({item,setSelected})=>{
    const [orderdate,setOrdersDate]=useState('');
    useEffect(()=>{
        let dateArray=item.orderDate.split(' ');
        let dateString=`${dateArray[0]},${dateArray[1]} ${dateArray[2]} ${dateArray[3]} at ${dateArray[4]}`;
        setOrdersDate(dateString)
    },[])

    return(
        <View style={styles.orderCard}>
            <View style={{width:"100%",justifyContent:"space-around",flexDirection:"row",padding:5,borderBottomColor:"black",borderBottomWidth:1}}>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.titleHeader}>OrderID</Text>
                    <Text style={[styles.titleHeader,{fontSize:10}]}>{item.OrderID}</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.titleHeader}>Amount</Text>
                    <Text style={styles.titleHeader}>{item.totalAmount}</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.titleHeader}>Items</Text>
                    <Text style={styles.titleHeader}>{item.numOfItems}</Text>
                </View>
            </View>
            <View style={{width:"100%",justifyContent:"space-around",padding:10,borderBottomColor:"black",borderBottomWidth:2}}>
                <Text style={styles.titleHeader}>Place On </Text>
                <Text style={styles.titleHeader}>{orderdate}</Text>
            </View>
            <View style={{width:"100%",justifyContent:"space-around",flexDirection:"row",padding:15,}}>
                <Pressable style={{flexDirection:"row",justifyContent: 'center',alignItems: 'center',}} 
                    onPress={()=>{
                        setSelected(item)
                    }}
                >
                    <Text style={styles.titleHeader}>View Details</Text>
                    <Image style={{width:15,height:15,marginLeft:4}} source={{uri:"https://cdn-icons-png.flaticon.com/128/32/32195.png"}} />
                </Pressable>
                <Pressable style={[styles.orderStatus,item.orderStatus==="In progress"?{backgroundColor:"#F05656"}:{backgroundColor:"#7DFFA2"}]}>
                    <Text style={[styles.titleHeader,item.orderStatus==="In progress"?{color:"white"}:{color:"black"}]}>{item.orderStatus}</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    orderCard:{
        borderColor:"black",
        borderWidth:2,
        borderRadius:10,
        margin: 10,
    },
    titleHeader:{
        fontWeight:"bold",
        color:"black",
        fontSize:15
    },
    titleSubText:{
        fontWeight:"700",
        color:"black",
        fontSize:15,
        margin:5
    },
    orderStatus:{
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        width:width/2.4,
        height:40,
        borderRadius:5
    }
})
export default OrderCard;