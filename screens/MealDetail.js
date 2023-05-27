import { ScrollView,StyleSheet, Text, View,Image } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetail({route}){
    const mealId = route.params.itemId;
    const selectedMeal = MEALS.find((meal)=> meal.id=== mealId);
    console.log(selectedMeal.steps);

    return <View style={styles.outerMain}>
                <ScrollView style={styles.mainContainer}>
                    
                    <Text style={styles.title}>{route.params.itemName}</Text>
                    <Image style={styles.image} source={{uri : selectedMeal.imageUrl}}></Image>
                    <View style={styles.innerContainer}>
                            <Text style={styles.detailText}>{selectedMeal.duration} Minutes</Text>
                            <Text style={styles.detailText}>{selectedMeal.complexity}</Text>
                            <Text style={styles.detailText}>{selectedMeal.affordability}</Text>
                    </View>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <View style={styles.subtitleview}><Text></Text></View>
                    <View>
                
                        {selectedMeal.ingredients.map((ingredient) => (
                            <View style={styles.listItem}>
                            <Text style={styles.listText} key={ingredient}>{ingredient}</Text>
                            </View>
                            ))}
                        <Text style={styles.subtitle}>Steps</Text>
                    <View style={styles.subtitleview}><Text></Text></View>
                    {selectedMeal.steps.map((step)=>(
                        <View style={styles.listItem} >
                            <Text key={step} style={styles.listText} >{step}</Text>
                        </View>))}

                    </View>

                </ScrollView>
    </View>
}

export default MealDetail;

const styles = StyleSheet.create({
    outerMain: {
        margin :10,
        flex:1,
        
    },
    mainContainer : {
        flex :1,
        paddingVertical : 20,
        marginBottom :30
    },
    innerContainer : {
        flexDirection : 'row',
        margin : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    detailText: { 
        marginHorizontal : 4,
        fontSize : 12,
        fontWeight : 'bold'
    },
    image : {
        width : "100%",
        height : 300,
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 22,
        paddingBottom : 16,
        margin : 10,
        textAlign :'center'
    },
    subtitle : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 16,
        marginTop : 10,
        textAlign :'center',
    },
    subtitleview : {
        borderBottomColor : '#274227',
        borderBottomWidth : 2,
        opacity : 0.5,
        marginHorizontal : 24,
        marginTop : 2,
        marginBottom : 12
    },
    listItem : {
        borderRadius : 8,
        paddingHorizontal :10,
        paddingVertical : 8,
        marginVertical : 4,
        marginHorizontal : 12,
        backgroundColor : '#274227'
    },
    listText :{
        color : 'white',
        textAlign : 'center'
    },
    scrollContainer : {
        maxWidth : '80%',
    }

})