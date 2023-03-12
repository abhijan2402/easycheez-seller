import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    Pressable
} from 'react-native';
import CustomButton from "../../components/Home/CustomButton";
import { HomeContext } from "../../Navigation/HomeNavigation";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

const SeeEditProduct=()=>{
    const {products} = useContext(HomeContext);
    console.log((products));
    const navigation=useNavigation();
    return (
        <ScrollView style={{backgroundColor:"white",alignSelf:"center",flex:1,width:windoWidth}}>
            <View style={{flexDirection: 'row',justifyContent:"space-between",padding:15}}>
                <CustomButton title={"Add Packages"} onpress={()=>navigation.navigate("package")} />
                <CustomButton title={"Default Products"} onpress={()=>navigation.navigate("defaultproduct")} />
            </View>
            {
                products.map((item,index)=>(
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