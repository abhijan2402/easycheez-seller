import firestore from '@react-native-firebase/firestore';

export const getAllOrders = async (storeID) => {
    let resultArray = [];
    return firestore().collection("OrderPage").where("shopID", "==", storeID).get()
      .then((res) => {
        res.forEach((data) => {
          resultArray.push({ ...data._data, OrderID: data.id });
        })
        return resultArray
      })
      .catch((e) => {
        console.log(e);
      })
}