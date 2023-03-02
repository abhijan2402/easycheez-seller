import { View, Text,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
 
    <ScrollView style={{backgroundColor:"white"}}>
      <View>
        <Image source={require('../assets/profile.png')} style={{width:390,height:340,alignSelf:"center"}}/>
      </View>
      
      <View style={{alignItems:"center",marginTop:25}}>
      <Text style={{fontWeight: '800',fontSize:22,color:"black"}}>Create Your Profile</Text>
      </View>
  
      
      <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 30}}>First Name*</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter your first Name'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Last Name*</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter your last Name'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Mobile Number</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'+91 Enter your Mobile Number'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Email ID</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter your Email ID'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>State*</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Select State'}
             />
          </View>
          <View>
            <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>City*</Text>
            <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Enter city Name'}
             />
          </View>
         
          <TouchableOpacity style={{height: 44,width: 279,marginLeft: 50,marginTop: 30,backgroundColor: '#F05656',borderRadius: 20,marginBottom: 10,}}>
              <Text style={{textAlign: 'center', marginTop: 13,color: 'white',fontSize: 15,fontWeight: '500'}} onPress={()=>{navigation.navigate('StoreRegistration')}}>Get Started</Text>
          </TouchableOpacity>

          <View style={{marginBottom:24}}></View>
      </ScrollView>
 
  )
}

export default Profile