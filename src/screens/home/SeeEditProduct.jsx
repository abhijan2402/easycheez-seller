import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    Pressable,
    RefreshControl
} from 'react-native';
import { GlobalVariable } from "../../../App";
import { MainContext } from "../../Navigation/MainNavigation";
import { getAllProducts } from "../../services/GetAllProcts";
const windoWidth = Dimensions.get('window').width;

const SeeEditProduct=()=>{
    const {products} = useContext(MainContext);
    const { userDetails } = useContext(GlobalVariable);
    const [allProduct,setAllProducts]=useState(products)
    const navigation=useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(async() => {
        setRefreshing(true);
        setAllProducts(await getAllProducts(userDetails.userDetails.storeID))
        setRefreshing(false);
    }, []);
    return (
        <ScrollView style={{backgroundColor:"white",alignSelf:"center",flex:1,width:windoWidth}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={{flexDirection: 'row',justifyContent:"space-between",padding:15}}>
                <Text style={{color:"black",fontWeight:"bold",padding:10,textAlign:"center",width:'100%',fontSize:25}}>Shop Product</Text>
            </View>
            {
                allProduct.map((item,index)=>(
                    <View style={styles.ProView} key={index}>
                        <Pressable onPress={()=>navigation.navigate("editproduct",{selectedItem:item})} style={{position:"absolute",top:10,right:10}}>
                            <Image
                                source={require('../../assets/edit.png')}
                                style={{position:"absolute",width:20,height:20,tintColor:"black",top:10,right:10,resizeMode:"contain"}}
                            />
                        </Pressable>
                        <Image
                            source={{uri: item.ProImage}}
                            style={styles.ProImage}
                        />
                        <View style={{width: windoWidth / 2.7}}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: '600',
                                        color: 'black',
                                        marginHorizontal: 6,
                                    }}
                                >
                                    {item.ProductName}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: '600',
                                    color: 'black',
                                    marginVertical: 8,
                                    marginHorizontal: 6,
                                }}>
                                Price - {item.ProductPrice}/-
                            </Text> 
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ProImage: {
      width: windoWidth / 2.8,
      height: 100,
      alignItems: 'center',
      resizeMode:"contain"
    },
    ProView: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor:"#F05656",
      alignItems: 'center',
      paddingVertical: 15,
      marginTop:10
    }
  });
export default SeeEditProduct;