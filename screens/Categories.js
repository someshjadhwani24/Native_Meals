import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data.js';
import GridTile from '../componenets/GridTile.js';
import MealsOverview from './MealsOverview.js';



function CategoriesScreen ({navigation})
{
    function renderCategoryItem(itemData){
        function onPressHandler(){
            navigation.navigate("MealsOverview", {
                categoryID : itemData.item.id,
                categoryName : itemData.item.title,
            });
    
        }
        return (
            <GridTile title ={itemData.item.title} color = {itemData.item.color} onPress ={onPressHandler} />
    
        )
    }
    
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item)=>item.id} 
            renderItem={renderCategoryItem} 
            numColumns={2}/>

    )
}

export default CategoriesScreen;

