//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CourseCard from '../../Components/CourseCard';

// create a component
const CourseScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default CourseScreen;
