import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustonTabBar from '../components/CustonTabBar';
import { AuthProviderList } from '../context/authContext_list';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false
    }}
    tabBar={pros=><CustonTabBar{...pros}/>}
    >
        <Tab.Screen 
            name="List" 
            component={List} 
        />
        <Tab.Screen 
            name="User" 
            component={User} 
        />
    </Tab.Navigator>
  );
}