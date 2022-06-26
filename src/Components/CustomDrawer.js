import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
  
  function CustomDrawer(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{alignItems:'center', paddingVertical:16, backgroundColor:'lightblue'}}>
            <Image 
            style={{width:80, height:80, borderRadius:50}}
            source={{uri:'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}}/>
            <Text style={{fontWeight:'800', marginVertical:8}}>Yasir Ali</Text>
        </View>
        <DrawerItem
            label="Online Verification"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Apply Online"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Our Trainers"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Download Brochure"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="About SuperTech"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Location"
            onPress={()=>alert('Hello From Navigator')}
        />
        
        
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawer;
