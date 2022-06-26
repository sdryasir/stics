import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../Constants/navigationStrings';
import TabRoutes from './TabRoutes';
import CustomDrawer from '../Components/CustomDrawer';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown:false}}  drawerContent={(props) => <CustomDrawer {...props} />}>
                <Drawer.Screen name={navigationStrings.TABS} component={TabRoutes} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes;