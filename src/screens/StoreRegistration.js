import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity  } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
const StoreRegistration = () => {
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={{alignItems:"center",marginTop:25}}>
      <Text style={{fontWeight: '800',fontSize:22,color:"black"}}>Add Store</Text>
      </View>
  
      <View style={{marginTop:25,marginLeft:50}}>
      <Text style={{fontWeight: '700',fontSize:18,color:"black"}}>Store Details</Text>
      </View>

      <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 30}}>Store Name</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add Shop Name'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>About the Store</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add Store Details'}
             />
          </View>
          <View style={{display:"flex",flexDirection:"row"}}>
            <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Opening time</Text>
            <TextInput style={{height: 44,width: 114,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter time'}
             />
             </View>
             <View>
              <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Mobile Number</Text>
            <TextInput style={{height: 44,width: 114,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter time'}
             />
             </View>
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Mobile Number</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'+91 Enter your Mobile Number'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Select Category</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add Category'}
             />
             {/* <Dropdown/> */}
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Shop No</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter Shop No'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Address</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add store address'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Landmark</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add Landmark'}
             />
          </View>
         
          <TouchableOpacity style={{height: 44,width: 279,marginLeft: 50,marginTop: 30,backgroundColor: '#F05656',borderRadius: 20,marginBottom: 10,}}>
              <Text style={{textAlign: 'center', marginTop: 13,color: 'white',fontSize: 15,fontWeight: '500'}}>Add</Text>
          </TouchableOpacity>

          <View style={{marginBottom:24}}></View>
      </ScrollView>
  )
}

export default StoreRegistration

const styles = StyleSheet.create({})