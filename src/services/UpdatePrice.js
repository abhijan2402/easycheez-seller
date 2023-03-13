import firestore from '@react-native-firebase/firestore';

export const UpdateProductPrice=async(productID,newPrice)=>{
    return firestore().collection("ProductPage").doc(productID)
    .update({
        ProductPrice:newPrice
    })
    .then(()=>{
        return {data:"Price Updated",response:true}
    })
    .catch((e)=>{
        return {error:e,response:false}
    })
}