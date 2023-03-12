import React, { useContext, useRef, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import DropDownPicker from 'react-native-dropdown-picker';
import { commoneStyles } from '../../styles/commonStyles';
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
import Toast from '../../components/common/Toast';
function AddProduct() {
    const { userDetails } = useContext(GlobalVariable);
    const childRef = useRef(null);

    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    const [loading, setLoading] = useState(false)

    const [productName, setproductName] = useState("")
    const [ProductPrice, setProductPrice] = useState("")
    const [ImageLink, setImageLink] = useState("")
    const [OfferPrice, setOfferPrice] = useState("");
    
    const [Category, setCategory] = useState(false);
    const [CategoryValue, setCategoryValue] = useState(null);
    const [CatVal, setCatVal] = useState([
        { label: 'Grocery', value: 'Grocery' },
        { label: 'Food', value: 'Food' }
    ]);
    const AddProd = async () => {
        try {
            if (productName == '')
                throw "Please enter Product Name";
            if (ProductPrice == '')
                throw "Please enter Product Price";
            if (CategoryValue == null)
                throw "Please enter Product Category";
            if (ImageLink == '')
                throw "Please enter Product Image";
            setLoading(true)
            const ProdDetails = {
                Category: CategoryValue,
                ProImage: ImageLink,
                ProOffer: OfferPrice,
                ProductName: productName,
                ProductPrice: ProductPrice,
                storeID:userDetails.userDetails.storeID
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
            .finally(()=>setLoading(false))
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
            <ScrollView style={styles.MainView}>
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}>Add Product</Text>
                </View>
                <View style={styles.MidView}>
                    <View style={styles.fields}>
                        <Text style={styles.LabelName}>Product Name</Text>
                        <TextInput style={commoneStyles.textField} placeholderTextColor={"black"} placeholder='Add Product Name ' onChangeText={value => { setproductName(value) }} />
                        <Text style={styles.LabelName}>Product Price</Text>
                        <TextInput keyboardType='numeric' style={commoneStyles.textField} placeholderTextColor={"black"} placeholder='Add Price ' onChangeText={value => { setProductPrice(value) }} />
                        <Text style={styles.LabelName}>Select category</Text>
                        <DropDownPicker
                            placeholder="Select Category"
                            style={styles.dropdownsstyle}
                            open={Category}
                            value={CategoryValue}
                            items={CatVal}
                            setOpen={setCategory}
                            setValue={setCategoryValue}
                            setItems={setCatVal}
                            onSelectItem={item=>setCategoryValue(item.value)}
                        />
                        {/* <TextInput style={commoneStyles.textField} placeholderTextColor={"black"} placeholder='Add Category ' onChangeText={value => { setProCategory(value) }} /> */}
                        <Text style={styles.LabelName}>Add Product Image Link</Text>
                        <TextInput style={commoneStyles.textField} placeholderTextColor={"black"} placeholder='Add Image Link ' onChangeText={value => { setImageLink(value) }} />
                        <Text style={styles.LabelName}>Add Offer Price</Text>
                        <TextInput keyboardType='numeric' style={commoneStyles.textField} placeholderTextColor={"black"} placeholder='Add Offer Price ' onChangeText={value => { setOfferPrice(value) }} />
                    </View>
                    {/* <View style={styles.InputFooter}>
                        <View>
                            <Text style={styles.LabelName}>Product Name</Text>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/565/565761.png" }} style={styles.ImageAdd} />
                        </View>
                        <View>
                            <Text style={styles.LabelName}>Add Offer</Text>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/9778/9778869.png" }} style={styles.ImageAdd} />
                        </View>
                    </View> */}
                    <TouchableOpacity onPress={AddProd} style={styles.AddBtn}>
                        {
                            loading ?
                            <ActivityIndicator size={25} color={"white"} /> :
                            <Text style={styles.AddBtnText}>Add</Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    dropdownsstyle: {
        width: windoWidth / 1.244,
        height: 40,
        borderWidth: 0.6,
        // borderColor: "#F05656",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 20
    },
    MainView: {
        height: windoHeight,
        width: windoWidth,
        backgroundColor: "white"
    },
    Header: {
        height: windoHeight / 8,
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        fontSize: 25,
        color: "black",
        fontWeight: "700"
    },
    MidView: {
        // borderWidth: 1,
        // height: windoHeight / 
    },
    StoredetailsText: {
        fontSize: 17,
        textAlign: "center",
        fontWeight: "800",
        color: "black"
    },
    LabelName: {
        fontSize: 13,
        color: "black",
        marginTop: 15,
        marginVertical: 5,
        paddingHorizontal: 20
    },
    fields: {
        marginHorizontal: 15
    },
    ImageAdd: {
        width: 35,
        height: 35,
        alignSelf: "stretch"
    },
    InputFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10
    },
    AddBtn: {
        marginHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
        backgroundColor: "#F05656",
        paddingVertical: 10,
        borderRadius: 8
    },
    AddBtnText: {
        color: "white",
        fontWeight: "700",
        fontSize: 17
    }
});
export default AddProduct