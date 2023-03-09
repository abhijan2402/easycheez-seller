import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    Pressable
} from 'react-native';
import { shopProduct } from "../../data/stopProductList";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

const SeeEditProduct=()=>{
    const navigation=useNavigation();
    return (
        <ScrollView style={{backgroundColor:"white",alignSelf:"center",flex:1,width:windoWidth}}>
            {
                shopProduct.map((item,index)=>(
                    <View style={styles.ProView} key={index}>
                        <Pressable onPress={()=>navigation.navigate("editproduct",{selectedItem:item})} style={{position:"absolute",top:10,right:10}}>
                            <Image
                                source={require('../../assets/edit.png')}
                                style={{position:"absolute",width:20,height:20,tintColor:"black",top:10,right:10}}
                            />
                        </Pressable>
                        <Image
                            source={{uri: item.productImage}}
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
                                    {item.name}
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
                                Price - {item.productPrice}/-
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