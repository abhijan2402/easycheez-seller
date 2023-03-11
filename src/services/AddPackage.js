import firestore from '@react-native-firebase/firestore';

export const AddPackage=async(packageItem,packagePrice,shopID)=>{
    return firestore().collection("shoppackages")
    .add({
        price:packagePrice,
        items:packageItem   ,
        totalItemsInPackage:packageItem.length,
        packageData:new Date(),
        shopId:shopID
    })
    .then(()=>{
        return {data:"package Added Successfully",response:true}
    })
    .catch((e)=>{
        return {error:e,response:false}
    })
}