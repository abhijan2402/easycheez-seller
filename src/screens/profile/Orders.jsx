import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    RefreshControl
} from 'react-native';
import OrderButton from '../../components/Home/orderButton';
import OrderList from '../../components/Home/OrderList';
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
const {width,height}=Dimensions.get('window');

const Orders=()=>{
    const { userDetails } = useContext(GlobalVariable);
    
    const [orderList,setOrderList]=useState([]);
    const [filteredOrders,setFilteredOrders]=useState([]);
    const [selectedFeature,setSelectedFeature]=useState("allorders");

    const [refreshing, setRefreshing] = React.useState(false);

    const fiilterOrders=()=>{
        let finalArray=orderList.filter((item)=>{
            return item.orderStatus === "In progress"
        })
        setFilteredOrders(finalArray)
        setSelectedFeature("active")
    }
    const setAllOrders=()=>{
        setSelectedFeature("allorders")
        setFilteredOrders(orderList)
    }

    useEffect(()=>{
        getAllOrders()
    },[])

    const onRefresh = React.useCallback(async() => {
        setRefreshing(true);
        await getAllOrders()
        setRefreshing(false);
      }, []);

    const getAllOrders=async()=>{
        let resultArray=[];
        firestore().collection("OrderPage").where("shopID","==",userDetails.userDetails.storeID).get()
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
        <ScrollView style={sytles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <Text style={{color:"black",fontWeight:"bold",fontSize:30,textAlign:"center",padding:10}}>Orders</Text>
            <Image style={{width:width,height:width,resizeMode:"contain"}} source={require("../../assets/imageOrder.png")} />   
            <View style={{flexDirection:"row",width:width,justifyContent:"space-around"}}>
                <OrderButton 
                    bordercolor={"#F05656"} 
                    title="Active Orders" 
                    backgroundcolor={selectedFeature==='active'?"#F05656":"white"} 
                    textColor={selectedFeature==='active'?"white":"black"} 
                    checkForActivOrders={fiilterOrders}  
                />
                <OrderButton 
                    bordercolor={"#7DFFA2"} 
                    title="All Orders" 
                    backgroundcolor={selectedFeature==='allorders'?"#7DFFA2":"white"} 
                    textColor={"black"} 
                    checkForActivOrders={setAllOrders} 
                />
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