import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import { commoneStyles } from '../../styles/commonStyles';
function AddProduct() {
    const showToasts = () => {
        console.log("hey")
    }
    return (<>
        <ScrollView style={styles.MainView}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Add Product</Text>
            </View>
            <View style={styles.MidView}>
                <Text style={styles.StoredetailsText}>Store Details</Text>
                <View style={styles.fields}>
                    <Text style={styles.LabelName}>Product Name</Text>
                    <TextInput style={commoneStyles.textField} placeholder='Add Product Name ' />
                    <Text style={styles.LabelName}>Product Price</Text>
                    <TextInput style={commoneStyles.textField} placeholder='Add Price ' />
                    <Text style={styles.LabelName}>Select category</Text>
                    <TextInput style={commoneStyles.textField} placeholder='Add Category ' />
                </View>
                <View style={styles.InputFooter}>
                    <View>
                        <Text style={styles.LabelName}>Product Name</Text>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/565/565761.png" }} style={styles.ImageAdd} />
                    </View>
                    <View>
                        <Text style={styles.LabelName}>Add Offer</Text>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/9778/9778869.png" }} style={styles.ImageAdd} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => Toast.info('Lorem ipsum info', 'top')} style={styles.AddBtn}>
                    <Text style={styles.AddBtnText}>Add</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
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
        marginVertical: 5
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
        marginHorizontal: 20,
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