import React, { useContext, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
import Toast from '../../components/common/Toast';
function Offer() {
    const childRef = useRef(null);
    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');
    const { userUid, userDetails } = useContext(GlobalVariable);
    const [loading, setLoading] = useState(false)
    const AddProd = async () => {
        try {
            // if (productName == '')
            //     throw "Please enter Product Name";
            // if (ProductPrice == '')
            //     throw "Please enter Product Price";
            // if (CategoryValue == null)
            //     throw "Please enter Product Category";
            // if (ImageLink == '')
            //     throw "Please enter Product Image";
            setLoading(true)
            const ProdDetails = {
                // Category: CategoryValue,
                // ProImage: ImageLink,
                // ProOffer: OfferPrice,
                // ProductName: productName,
                // ProductPrice: ProductPrice,
                // storeID: userDetails.userDetails.storeID
            }
            await firestore()
                .collection('ProductPage')
                .add(ProdDetails)
                .then((res) => {
                    setToastMessage('Product Added');
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
            <View>
                <Text>hi</Text>
            </View>
        </>
    )
}

export default Offer