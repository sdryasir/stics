import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';
import navigationStrings from '../Constants/navigationStrings';
import CourseScreen from '../Screens/Courses/CourseScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import imagePath from '../Constants/imagePath';
import OffersScreen from '../Screens/Offers/OffersScreen';
import AllScreen from '../Screens/All/AllScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetailScreen from '../Screens/CourseDetail/CourseDetailScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
      <Stack.Screen name={navigationStrings.COURSE_DETAIL} component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}
function CourseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationStrings.COURSES} component={CourseScreen} />
      <Stack.Screen name={navigationStrings.COURSE_DETAIL} component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name={navigationStrings.HOME_STACK} component={HomeStack} 
      options={{
        tabBarIcon:({focused})=>{
            return (
                <Image source={imagePath.iconHome}/>
            )
        }
      }}
      />
      <Tab.Screen name={navigationStrings.COURSE_STACK} component={CourseStack} 
      options={{
        tabBarIcon:({focused})=>{
            return (
                <Image source={imagePath.iconCourses}/>
            )
        }
      }}
      />
      <Tab.Screen name={navigationStrings.OFFERS} component={OffersScreen} 
      options={{
        tabBarIcon:({focused})=>{
            return (
                <Image source={imagePath.iconOffer}/>
            )
        }
      }}
      />
      <Tab.Screen name={navigationStrings.ALL} component={AllScreen} 
      options={{
        tabBarIcon:({focused})=>{
            return (
                <Image source={imagePath.iconAll}/>
            )
        }
      }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;