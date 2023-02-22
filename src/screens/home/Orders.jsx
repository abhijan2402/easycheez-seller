import React from 'react';
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
const {width,height}=Dimensions.get('window');

const Orders=()=>{
    
    return (
        <ScrollView style={sytles.container}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30,textAlign:"center",padding:10}}>Orders</Text>
            <Image style={{width:width,height:width,resizeMode:"contain"}} source={require("../../assets/imageOrder.png")} />   
            <View style={{flexDirection:"row",width:width,justifyContent:"space-around"}}>
                <OrderButton title="Active Orders" backgroundcolor={"#F05656"} textColor={"white"} />
                <OrderButton title="All Orders" backgroundcolor={"#7DFFA2"} textColor={"black"} />
            </View>
            <OrderList />
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