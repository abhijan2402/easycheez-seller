import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
import Toast from '../../components/common/Toast';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Offer() {
    const childRef = useRef(null);

    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');
    const { userUid, userDetails } = useContext(GlobalVariable);
    const [OfferCode, setOfferCode] = useState("")
    const [OfferPercentage, setOfferPercentage] = useState("")
    const [offerName, setofferName] = useState("")
    const [loading, setLoading] = useState(false)
    const [performanceStateArray, setPerformanceStateArray] = useState([]);
    const names = [
        { name: 'ABC', percentage: "30%" },
        { name: 'DEF', percentage: "50%" },
        { name: 'GHI', percentage: "60%" },
        { name: 'JKL', percentage: "10%" },
        { name: 'MNO', percentage: "80%" },
    ]
    const AddProd = async () => {
        try {
            if (OfferCode == '')
                throw "Please enter OfferCode";
            if (OfferPercentage == '')
                throw "Please enter OfferPercentage";
            if (offerName == null)
                throw "Please enter offerName";

            setLoading(true)
            const ProdDetails = {
                OfferCode: OfferCode,
                OfferPercentage: OfferPercentage,
                OfferName: offerName,
                storeId: userDetails.userDetails.storeID

            }
            await firestore()
                .collection('Offer')
                .add(ProdDetails)
                .then((res) => {
                    setToastMessage('Offer Added');
                    setToastTextColorState("black")
                    setToastColorState("rgba(41,250,25,1)")
                    childRef.current.showToast();
                    getData();
                    console.log(res)
                })
                .catch((error) => {
                    setToastMessage(error);
                    setToastTextColorState("white")
                    setToastColorState("red")
                    childRef.current.showToast();
                    console.log(error);
                })
                .finally(() => setLoading(false))
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        }
    }
    const getData = async () => {
        try {
            let i = 0;
            let j = 0;
            // const NewAppendArray = []
            const resultedArray = []
            const resultedArray1 = []
            const performanceData = await firestore().collection("Offer").where("storeId", "==", userDetails.userDetails.storeID).get();
            performanceData.forEach((item) => {
                resultedArray.push({ ...item.data(), id: item.id });
            })

            setPerformanceStateArray(resultedArray);
            console.log(performanceStateArray)
        } catch (error) {
            console.log(error);
        }
    }
    const del = async (id) => {
        console.log(id)
        firestore()
            .collection('Offer')
            .doc(`${id}`)
            .delete()
            .then(() => {
                setToastMessage('Offer deleted');
                setToastTextColorState("black")
                setToastColorState("rgba(41,250,25,1)")
                childRef.current.showToast();
                getData();
            });
        try {
            firestore()
                .collection('Offer').doc(`${id}`).delete()
                .then(() => {
                    console.log('User deleted!');
                });
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Toast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef}
            />
            <ScrollView style={styles.Scroll}>
                <Text style={styles.SubHead}>Offer</Text>

                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 5, marginTop: 30 }}>Offer Name*</Text>
                        <TextInput
                            style={styles.Box}
                            placeholder={'Enter Offer Name'}
                            placeholderTextColor={"black"}
                            onChangeText={value => { setofferName(value) }}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 5, marginTop: 20 }}>Offer Percentage*</Text>
                        <TextInput
                            style={styles.Box}
                            placeholder={'Enter Offer Percentage'}
                            placeholderTextColor={"black"}
                            onChangeText={value => { setOfferPercentage(value) }}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 5, marginTop: 20 }}>Offer Code*</Text>
                        <TextInput
                            style={styles.Box}
                            placeholder={'Offer Code'}
                            placeholderTextColor={"black"}
                            onChangeText={value => { setOfferCode(value) }}
                        />
                    </View>

                    <TouchableOpacity style={styles.Btn} onPress={AddProd}>
                        {
                            loading ?
                                <ActivityIndicator size={25} color={"white"} /> :
                                <Text style={styles.BtnTxt}>Add</Text>
                        }


                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={{ fontWeight: '700', fontSize: 22, color: "black", textAlign: "center", marginTop: 25 }}>Running Offers</Text>
                    <View style={{ marginTop: 10 }}>
                        {
                            performanceStateArray.length == null ? <ActivityIndicator size="large" color="red" style={{ marginVertical: 40 }} /> :
                                performanceStateArray.map((item) => (

                                    <View style={styles.MainOfferView} key={item.id}>
                                        <View style={styles.MainOfferInner}>
                                            <Text style={styles.OfferText}>Offer Name : {item.OfferName}</Text>
                                            <Text style={styles.OfferText}>Offer Percentage: {item.OfferPercentage}%</Text>
                                            <Text style={styles.OfferText}>Offer Code : {item.OfferCode}</Text>
                                        </View>
                                        <TouchableOpacity style={[styles.MainOfferInner, { alignItems: "flex-end", paddingRight: 10, width: windoWidth / 5, paddingTop: 10 }]} onPress={() => del(item.id)}>
                                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/6861/6861362.png" }} style={{
                                                width: 20,
                                                height: 20
                                            }} />
                                        </TouchableOpacity>
                                    </View>
                                ))
                        }

                    </View>
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    Scroll: {
        backgroundColor: "white",
        height: windoHeight,
        width: windoWidth
    },
    Head: {
        alignSelf: "center",
        marginTop: 20
    },
    SubHead: {
        color: "black",
        fontSize: 30,
        fontWeight: '900',
        textAlign: "center",
        padding: 10
    },
    Box: {
        width: windoWidth / 1.4,
        height: windoHeight / 18,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 1,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10
    },
    Btn: {
        width: windoWidth / 1.4,
        height: windoHeight / 17,
        marginTop: 15,
        backgroundColor: '#F05656',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    BtnTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    MainOfferView: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 20
    },
    MainOfferInner: {
        width: windoWidth / 1.5,
        // borderWidth: 1
    },
    OfferText: {
        fontSize: 15,
        color: "black",
        marginHorizontal: 10,
        marginVertical: 5,
        fontWeight: "600"
    }
})
export default Offer