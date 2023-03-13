import firestore from '@react-native-firebase/firestore';

export const getAllOffers = async (storeID) => {
  let resultArray = [];
  return firestore().collection("Offer").where("storeId", "==", storeID).get()
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