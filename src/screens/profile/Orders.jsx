import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    RefreshControl,
    LogBox
} from 'react-native';
import { GlobalVariable } from '../../../App';
import OrderButton from '../../components/Home/orderButton';
import OrderList from '../../components/Home/OrderList';
import { MainContext } from '../../Navigation/MainNavigation';
import { getAllOrders } from '../../services/GetAllOrders';
const {width,height}=Dimensions.get('window');

const Orders=()=>{
    const {orders} = useContext(MainContext);
    const { userDetails } = useContext(GlobalVariable);

    const [orderList,setOrderList]=useState(orders);
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


    const onRefresh = React.useCallback(async() => {
        setRefreshing(true);
        setOrderList(await getAllOrders(userDetails.userDetails.storeID));
        setRefreshing(false);
    }, []);

    return (
        LogBox.ignoreAllLogs(),
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