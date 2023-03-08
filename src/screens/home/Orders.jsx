import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import OrderButton from '../../components/Home/orderButton';
import OrderList from '../../components/Home/OrderList';
import { orderDetails } from '../../data/orderDetails';
import firestore from '@react-native-firebase/firestore';
const {width,height}=Dimensions.get('window');

const Orders=()=>{
    const [orderList,setOrderList]=useState([]);
    const [filteredOrders,setFilteredOrders]=useState([]);
    const fiilterOrders=()=>{
        let finalArray=orderList.filter((item)=>{
            return item.orderStatus === "In progress"
        })
        setFilteredOrders(finalArray)
    }
    const setAllOrders=()=>{
        setFilteredOrders(orderList)
    }

    useEffect(()=>{
        getAllOrders()
    },[])

    const getAllOrders=async()=>{
        let resultArray=[];
        firestore().collection("OrderPage").get()
        .then((res)=>{
            res.forEach((data)=>{
                resultArray.push({...data._data,OrderID:data.id});
            })
            setOrderList(resultArray)
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    return (
        <ScrollView style={sytles.container}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30,textAlign:"center",padding:10}}>Orders</Text>
            <Image style={{width:width,height:width,resizeMode:"contain"}} source={require("../../assets/imageOrder.png")} />   
            <View style={{flexDirection:"row",width:width,justifyContent:"space-around"}}>
                <OrderButton title="Active Orders" backgroundcolor={"#F05656"} textColor={"white"} checkForActivOrders={fiilterOrders}  />
                <OrderButton title="All Orders" backgroundcolor={"#7DFFA2"} textColor={"black"} checkForActivOrders={setAllOrders} />
            </View>
            {
                orderList && <OrderList orderList={filteredOrders.length==0?orderList:filteredOrders} />
            }
        </ScrollView>
    )
}

const sytles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignSelf:"center"
    }
})

export default Orders;