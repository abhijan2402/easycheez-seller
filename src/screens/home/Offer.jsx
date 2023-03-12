import React, { useContext, useRef, useState } from 'react'
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
                    <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 57, marginTop: 25 }}>Existing Offers</Text>
                    <View style={{ marginLeft: 57, marginTop: 10 }}>
                        <FlatList data={names} renderItem={(element) => {
                            console.log(element.item.name);
                            return <Text style={{ fontWeight: "600", color: "black", marginTop: 15 }}>{element.item.name}</Text>
                        }} /></View>
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
})
export default Offer