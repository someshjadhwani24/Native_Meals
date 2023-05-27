import { MEALS } from "../data/dummy-data";
import MealItem from "../componenets/MealItem";
import { FlatList, StyleSheet, Text, View } from 'react-native';

function MealsOverview({route}){

    const catId = route.params.categoryID;
    const catName = route.params.categoryName;

    function renderListItem (itemData){
        return(
            <MealItem id = {itemData.item.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl} complexity={itemData.item.complexity} duration={itemData.item.duration} afford={itemData.item.affordability}></MealItem>
        )
    }

    const catMeals = MEALS.filter((mealItem)=>{
        return (mealItem.categoryIds.indexOf(catId)>=0 );
    })

    return(
        <View style={styles.container}>
            <FlatList data={catMeals} keyExtractor={(item)=>item.id} renderItem ={renderListItem} />
        </View>

    )

}
export default MealsOverview;

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding : 16,
    }
})