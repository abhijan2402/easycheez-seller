import firestore from '@react-native-firebase/firestore';

export const getAllProducts = async (storeID) => {
    const resulArray = [];
    return firestore().collection("ProductPage").where("storeID", "==", storeID).get()
      .then(async(res) => {
        res._docs.map(item => {
          resulArray.push({...item._data,id:item.id});
        });
        return resulArray
      })
      .catch((e) => {
        console.log(e)
      })
  }