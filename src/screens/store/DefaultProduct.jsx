import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, Modal, loading, ScrollView, Pressable, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import PackageData from '../../data/PackageData';
import { GlobalVariable } from '../../../App';
function DefaultProduct() {
    const { userDetails } = useContext(GlobalVariable);
    const [modalVisible, setModalVisible] = useState(false);
    const [price, setprice] = useState("")
    const [loading, setLoading] = useState(false);
    const [OfferPrice, setOfferPrice] = useState("")
    const [NewName, setNewName] = useState('')
    const [NewImage, setNewImage] = useState("")
    const navigation = useNavigation()
    const SetVal = (name, image) => {
        // console.log(name, image)
        setModalVisible(true)
        let test1 = name;
        let test2 = image
        setNewName(test1)
        setNewImage(test2)
        // console.log(NewName, NewImage, "try")
    }
    const AddProd = async () => {
        setLoading(true)
        try {
            if (OfferPrice == '')
                throw "Please enter Offer Price";
            if (price == '')
                throw "Please enter Price";
            const ProdDetails = {
                Category: "Grocery",
                ProImage: NewImage,
                ProOffer: OfferPrice,
                ProductName: NewName,
                ProductPrice: price,
                storeID: userDetails.userDetails.storeID
            }
            await firestore()
                .collection('ProductPage')
                .add(ProdDetails)
                .then(() => {
                    setLoading(false)
                    setModalVisible(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error);
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollView style={styles.MainView}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Default Product</Text>
            </View>
            <View style={styles.ProView}>
                {
                    PackageData.map((item) => (
                        <View key={item.id} style={{ marginVertical: 10, elevation: 10, backgroundColor: "white", marginHorizontal: 4, borderRadius: 8, width: windoWidth / 2.2, }} >
                            <View style={styles.ImageView}>
                                <Image source={{ uri: item.ProImage }} style={styles.ImagePro} />
                            </View>
                            <Text style={styles.ProText}>
                                {item.name.substring(0, 35)}....
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1.5 }}>
                                <TouchableOpacity style={[styles.AddPriceBtn, {}]} onPress={() => SetVal(item.name, item.ProImage)}>
                                    <Text style={{ fontSize: 12, color: "black", fontWeight: "bold" }}>Add Price</Text>
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={[styles.AddPriceBtn, { borderLeftWidth: 1 }]} onPress={() => SetVal(item.name, item.ProImage)}>
                                    <Text style={{ color: "skyblue", fontSize: 12, fontWeight: "bold" }}>Add Offer</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    ))
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}>

                                <Text style={styles.modalText}>Add Product to list</Text>
                            </TouchableOpacity>
                            <View>
                                <TextInput
                                    placeholderTextColor={"black"}
                                    style={styles.Box}
                                    placeholder={'Add Price'}
                                    onChangeText={value => { setprice(value) }}
                                    keyboardType={"numeric"}
                                />
                                <TextInput
                                    placeholderTextColor={"black"}
                                    style={styles.Box}
                                    placeholder={'Add Offer Price'}
                                    onChangeText={value => { setOfferPrice(value) }}
                                    autoCapitalize={true}
                                    keyboardType={"numeric"}
                                />
                            </View>
                            <TouchableOpacity style={styles.MainButton} onPress={AddProd}>
                                {
                                    loading ?
                                        <ActivityIndicator color={'white'} size={30} /> :
                                        <Text style={styles.BtnTxt}>Add Product</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "white",
        height: windoHeight,
        width: windoWidth
    },
    Header: {
        height: windoHeight / 11,
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    ImagePro: {
        width: '100%',
        height: windoHeight / 4.7,
        borderRadius: 10,
        // margin: 10,
    },
    ProView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 5,
        justifyContent: "center",
    },
    ImageView: {
    },
    AddPriceBtn: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    ProText: {
        marginVertical: 10,
        color: 'black',
        fontWeight: "bold",
        paddingHorizontal: 10,
        height: windoHeight / 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    Box: {
        width: windoWidth / 1.4,
        height: windoHeight / 18,
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 1,
        paddingLeft: 10,
        fontWeight: "bold",
        marginTop: 10,
        color: "black",
        paddingLeft: 10
    },
    MainButton: {
        width: windoWidth / 1.4,
        height: windoHeight / 17,
        backgroundColor: '#F05656',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    BtnTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },


})

export default DefaultProduct