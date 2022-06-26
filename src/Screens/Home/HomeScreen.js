//import liraries
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseCard from '../../Components/CourseCard';
import navigationStrings from '../../Constants/navigationStrings';


// create a component
const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.COURSE_DETAIL)}>
                    <CourseCard/>
                </TouchableOpacity>
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
        alignItems:'center'
    },
    
});

//make this component available to the app
export default HomeScreen;
