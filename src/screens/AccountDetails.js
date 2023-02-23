import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const AccountDetails = () => {
  return (
  
 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={{alignItems:"center",marginTop:25}}>
          <Text style={{fontWeight: '800',fontSize:22,color:"black"}}>Account Details</Text>
          </View>
      
           
          <View>
            <Image source={require('../assets/Account.jpg')} style={{width:390,height:340,alignSelf:"center"}}/>
          </View>
          
        
          <View>
                <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 30}}>Account Holder Nmae</Text>
                <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
                  placeholder={'e.g.Rajesh Arora'}
                 />
              </View>
              <View>
                <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Account Number</Text>
                <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
                  placeholder={'e.g.00440532013000'}
                 />
              </View>
              <View>
                <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>IFSC Code</Text>
                <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
                  placeholder={'e.g.UTIF0000123'}
                 />
              </View>
              <View>
                <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Bank Name</Text>
                <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
                  placeholder={'e.g.Axis Bank'}
                 />
              </View>
             
              <TouchableOpacity style={{height: 44,width: 279,marginLeft: 50,marginTop: 30,backgroundColor: '#F05656',borderRadius: 20,marginBottom: 10,}}>
                  <Text style={{textAlign: 'center', marginTop: 13,color: 'white',fontSize: 15,fontWeight: '500'}}>Add</Text>
              </TouchableOpacity>
    
              <View style={{marginBottom:24}}></View>
          </ScrollView>
   
  )
}

export default AccountDetails

const styles = StyleSheet.create({})