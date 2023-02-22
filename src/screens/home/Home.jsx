import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import AddPro from '../../components/Home/AddPro';
import Header from '../../components/Home/Header';
import ProductCard from '../../components/Home/ProductCard';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Home() {
  return (
    <View style={styles.MainView}>
        <Header title="Home"/>
        <View style={styles.cardView}>
            <View>
                <ProductCard title="Products" Img="https://cdn-icons-png.flaticon.com/128/859/859270.png" bg="#FFE589"/>
                <ProductCard title="Offers" Img="https://cdn-icons-png.flaticon.com/128/3176/3176371.png" bg="#62D7C2"/>
            </View>
            <View>
                <AddPro/>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    MainView:{
        width:windoWidth,
        height:windoHeight,
        backgroundColor:"white"
    },
    cardView:{
        display:"flex",
        flexDirection:"row",
        marginVertical:20
    }

})
export default Home