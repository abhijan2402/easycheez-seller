import React, { useState } from "react";
import { Dimensions, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const {width,height}=Dimensions.get('window');

const OrderList=({orderList})=>{
    const [showmodal,setShowModal]=useState(false);
    const [selectedOrder,setSelectedOrder]=useState('');
    const orderCard=(({item})=>(
        <View style={styles.orderCard}>
        <View style={{width:"100%",justifyContent:"space-around",flexDirection:"row",padding:5,borderBottomColor:"black",borderBottomWidth:1}}>
            <View style={{alignItems:"center"}}>
                <Text style={styles.titleHeader}>OrderID</Text>
                <Text style={styles.titleHeader}>{item.OrderID}</Text>
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
                <Text style={styles.titleHeader}>Place On {item.orderDate}</Text>
                <Text style={styles.titleHeader}>{item.orderDate}</Text>
            </View>
            <View style={{width:"100%",justifyContent:"space-around",flexDirection:"row",padding:15,}}>
                <Pressable style={{flexDirection:"row",justifyContent: 'center',alignItems: 'center',}} 
                    onPress={()=>{
                        setSelectedOrder(item)
                        setShowModal(!showmodal)
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
    ))
    return(
        <View>
            <FlatList
                data={orderList}
                keyExtractor={item=>item.OrderID}
                renderItem={orderCard}
            />  
            <Modal visible={showmodal} animationType='slide' transparent={true}>
                <View style={styles.modeOuter}>
                    <View style={styles.innnerModel}>
                        <Pressable onPress={()=>setShowModal(false)} style={{position:"absolute",right: 10,top:10}}>
                            <Image style={{width:20,height:20,}} source={{uri:"https://cdn-icons-png.flaticon.com/128/1617/1617543.png"}} />   
                        </Pressable> 
                        <Text style={[styles.titleHeader,{textAlign:"center",fontSize:25,marginBottom:20}]}>Order Details</Text>
                        <Text style={styles.titleSubText}>OrderID : {selectedOrder.OrderID}</Text>
                        <Text style={styles.titleSubText}>OrderBY : {selectedOrder.orderBY}</Text>
                        <Text style={styles.titleSubText}>Address : {selectedOrder.customAddedss}</Text>
                        <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",paddingTop:10,padding:5}}>
                            <Text style={styles.titleHeader}>Items : </Text>
                            <Text style={styles.titleHeader}>Unit</Text>
                        </View>
                        <ScrollView style={{marginTop:10}}>
                        {
                            selectedOrder &&
                            selectedOrder.itemsArray.map((item,index)=>(
                                <View key={index} style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems: 'center',marginVertical:2}}>
                                    <Text style={[styles.titleSubText,{fontSize:12,width:'70%'}]}>{item.itemName}</Text>
                                    <Text style={[styles.unitText,{fontSize:12}]}>{item.itemCount}</Text>
                                </View>
                            ))
                        }
                        </ScrollView>
                    </View>
                </View>
            </Modal>          
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
    modeOuter: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innnerModel: {
        backgroundColor: 'white',
        borderRadius: 10,
        // justifyContent: "center",
        // alignItems: 'center',
        width: width - 20,
        padding:20,
        height:height/2,
        borderWidth:2,
        borderColor:"#F05656"
    },
    unitText:{
        backgroundColor:"#F05656",
        width:50,
        height:30,
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:10,
        fontWeight:"bold",
        color:"white"
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
export default OrderList;