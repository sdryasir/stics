import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const width = Dimensions.get('screen').width

const CourseDetailScreen = () => {
    return (
        <>
            <View style={styles.courseCardContainer}>
                    <Image style={{width:'100%', height:200}} source={{uri:'https://www.ezeecomputertraining.com/wp-content/uploads/2018/03/5.jpg'}}/>
                    <View style={styles.cardBody}>
                        <View style={{flexDirection:'row', marginVertical:6}}>
                            <Text style={{fontWeight:'800'}}>Course Duration:</Text>
                            <Text> 3 Months</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:6}}>
                            <Text style={{fontWeight:'800'}}>Class Frequency:</Text>
                            <Text> 4 Days a Week</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:6}}>
                            <Text style={{fontWeight:'800'}}>Course Instructor:</Text>
                            <Text> Mr. Yasir Ali</Text>
                        </View>
                    </View>
            </View>
            <Text>Course Contents</Text>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    courseCardContainer:{
        alignSelf:'center',
        width:width-20,
        backgroundColor:'#eee',
        borderColor:'#ddd',
        borderWidth:1,
        elevation:6,
        marginBottom:10
    },
    cardBody:{
        padding:12
    },
});

//make this component available to the app
export default CourseDetailScreen;
