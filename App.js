import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions ={{
        headerStyle: {backgroundColor : '#274227'},
        headerTintColor :'white',
        contentStyle : {backgroundColor : '#91bd91'}
      }}>
      <Stack.Screen name="Categories" options= {{title : 'Home Screen'}} component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" 
                    component={MealsOverview} 
                    options ={({route}) => {
                      const catName = route.params.categoryName;
                      return {title:catName};
                    }} />
      <Stack.Screen name="MealDetail" component={MealDetail} 
                      options = {({route}) => {
                      {console.log(route.params)}
                      const catName = route.params.itemName;
                      return {title:catName};
                    } 
                    }
       />
    </Stack.Navigator>
    </NavigationContainer>
  );
}