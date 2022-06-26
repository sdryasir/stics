import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const width = Dimensions.get('screen').width

const CourseCard = () => {
    return (
        <View style={styles.courseCardContainer}>
                <Image style={{width:'100%', height:200}} source={{uri:'https://www.ezeecomputertraining.com/wp-content/uploads/2018/03/5.jpg'}}/>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Professional Web Design & Development</Text>
                    <Text style={styles.cardText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>
                </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    courseCardContainer:{
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
    cardTitle:{
        fontWeight:'800',
        fontSize:20,
    },
    cardText:{

    }
});

//make this component available to the app
export default CourseCard;
