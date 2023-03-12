import React, { useState, useContext, useRef } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../../components/Home/Header'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
import Toast from '../../components/common/Toast';

function Subscription() {
    const childRef = useRef(null);
    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    const [loading, setLoading] = useState(false)
    const [CheckBox1, setCheckBox1] = useState(false)
    const [CheckBox2, setCheckBox2] = useState(false)
    const { userDetails } = useContext(GlobalVariable);
    const [value, setvalue] = useState("")
    const Check = () => {
        const Data = "Subscription"
        setvalue(Data)
        console.log(value)
        setCheckBox2(false)
        setCheckBox1(true)

    }
    const Check2 = () => {
        const Data = "Comission"
        setvalue(Data)
        console.log(value)
        setCheckBox1(false)
        setCheckBox2(true)

    }
    const AddSubs = async () => {
        try {
            const dates = new Date();
            if (value == "")
                throw "Select any one of them"
            setLoading(true)
            const ProdDetails = {
                PurchasedDate: dates,
                storeID: userDetails.userDetails.storeID
            }
            await firestore()
                .collection(`${value}`)
                .add(ProdDetails)
                .then((res) => {
                    setToastMessage(`Product Added to ${value}`);
                    setToastTextColorState("black")
                    setToastColorState("rgba(41,250,25,1)")
                    childRef.current.showToast();
                    // console.log(res)
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
            <View style={styles.MainView}>
                <Header title="Subscription" />
                <View>
                    <Text style={styles.NameText}>Hello {userDetails.userDetails.email}</Text>
                </View>
                <TouchableOpacity style={[styles.MainBox, { borderWidth: CheckBox1 ? 2 : 0, borderColor: CheckBox1 ? "#F05656" : "green" }]} onPress={Check} >
                    <Text style={styles.SubsText}>Subscription-</Text>
                    <Text style={styles.PriceText}>499/- per month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.MainBox, { borderWidth: CheckBox2 ? 2 : 0, borderColor: CheckBox2 ? "#F05656" : "green" }]} onPress={Check2}>
                    <Text style={styles.SubsText}>Commission-</Text>
                    <Text style={styles.PriceText}>5% on every order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={AddSubs}>
                    {
                        loading ?
                            <ActivityIndicator size={25} color={"white"} /> :
                            <Text style={styles.BtnText}>Proceed</Text>
                    }

                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    Image: {
        width: 30,
        height: 30
    },
    NameText: {
        fontSize: 20,
        color: "black",
        fontWeight: "600",
        marginHorizontal: 20
    },
    MainBox: {
        marginHorizontal: 10,
        backgroundColor: "#F0F0F0",
        marginVertical: 25,
        borderRadius: 9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "space-around"
    },
    SubsText: {
        fontSize: 25,
        color: "black",
        fontWeight: "700",
        marginHorizontal: 15,
        marginVertical: 10
    },
    PriceText: {
        fontSize: 18,
        color: "black",
        marginHorizontal: 15
    },
    Btn: {
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
        backgroundColor: "#F05656",
        paddingVertical: 10,
        borderRadius: 8
    },
    BtnText: {
        color: "white",
        fontWeight: "700",
        fontSize: 17
    }
})
export default Subscription