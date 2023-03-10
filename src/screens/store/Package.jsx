import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import { commoneStyles } from '../../styles/commonStyles';
function Package() {
    const [productNames,setProductNames]=useState([]);
    const [productSingleName,setSingleProductName]=useState('');
    const [packagePrice,setPackagePrice]=useState('');

    const AddPackage=()=>{
        console.log(productNames);
    }
    const addProductNameToArray=()=>{
        setProductNames([...productNames,productSingleName])
        setSingleProductName('');
    }
    const removeSelctedItem=(item)=>{
        console.log(item);
        const filteredArray=productNames.filter(value=>{
            return value!==item
        })
        setProductNames(filteredArray)
    }
    return (
        <ScrollView style={styles.MainView}>
            <Text style={styles.titleStyle}>Add Package</Text>
            <View>
                <Image 
                    source={{uri:"https://5.imimg.com/data5/SELLER/Default/2021/4/KT/ZR/TX/42561548/c851b0b6-491f-41f5-9664-aae78a3d9183-1000x1000.jpg"}} 
                    style={styles.Image}
                />
            </View>
            <View >
                <View style={styles.ImageSettlement}>
                    <Text style={styles.LabelName}>
                        Product Name
                    </Text>
                    <Pressable style={styles.add_image_box} onPress={addProductNameToArray}>
                        <Image 
                            source={{uri:"https://cdn-icons-png.flaticon.com/128/1828/1828925.png"}} 
                            style={styles.Plusicon}
                        />
                    </Pressable>
                </View>
                <TextInput 
                    style={[commoneStyles.textField,{borderColor:"#F05656",fontWeight:"bold",borderWidth:2}]} 
                    placeholderTextColor={"black"} 
                    placeholder='Add Product Name'
                    onChangeText={(name)=>setSingleProductName(name)} 
                    value={productSingleName}

                />
            </View>
            <View>
                <Text style={styles.LabelName}>
                    Package Price
                </Text>
                <TextInput 
                    style={[commoneStyles.textField,{borderColor:"#F05656",fontWeight:"bold",borderWidth:2}]} 
                    placeholderTextColor={"black"} 
                    placeholder='Add Price'
                    onChangeText={(price)=>setPackagePrice(price)} 
                />
            </View>
            {
                productNames.length!==0 && 
                <View >
                    <Text style={[styles.productnamestyle,{fontSize:25}]}>Added Products</Text>
                    {
                        productNames.map((item,index)=>(
                            <View style={{flexDirection: 'row',justifyContent:"space-between",marginVertical:5}}>
                                <Text key={index} style={[styles.productnamestyle,{paddingVertical:5,}]}>{item}</Text>
                                <Pressable style={[styles.add_image_box,{width:30,height:30,borderRadius:15}]} onPress={()=>removeSelctedItem(item)}>
                                <Image 
                                    source={{uri:"https://cdn-icons-png.flaticon.com/128/4096/4096251.png"}} 
                                    style={styles.Plusicon}
                                />
                                </Pressable>
                                
                            </View>
                        ))
                    }
                </View>
            }
            <TouchableOpacity style={styles.Btn} onPress={AddPackage}>
                <Text style={styles.BtnText}>
                    Add Package
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:windoWidth,
        height:windoHeight/2,
    },
    MainView:{
        width:windoWidth,
        height:windoHeight,
        backgroundColor:"white",
        flex:1
    },
    LabelName: {
        fontSize: 13,
        color: "black",
        marginTop: 10,
        marginVertical: 2,
        marginHorizontal:25,
        fontWeight:"600"
    },
    Btn:{
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
        backgroundColor: "#F05656",
        paddingVertical: 10,
        borderRadius: 8
    },
    BtnText:{
        color: "white",
        fontWeight: "700",
        fontSize: 17
    },
    Plusicon:{
        width:20,
        height:20,
    },
    ImageSettlement:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    titleStyle:{
        textAlign:"center",
        color:"black",
        fontWeight:"bold",
        padding:10,
        fontSize:30
    },
    add_image_box:{
        backgroundColor:"white",
        elevation:5,
        padding:10,
        marginRight:20,
        borderRadius:20,
        height:40,
        width:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productnamestyle:{
        color:"black",
        fontWeight:"bold",
        paddingHorizontal:20,
        fontSize:18
    },
    remove_button:{
        backgroundColor:"white",
        elevation:5,
        marginRight:20,
        borderRadius:20,
        height:40,
        width:40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Package