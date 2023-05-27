import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function MealItem({id,title,imageUrl,duration,complexity,afford}){

    const navigation = useNavigation();
    function handlePress(){
        navigation.navigate("MealDetail",{itemName : title,itemId : id})
    }
    return (
        <View style={styles.outerContainer}>
            <Pressable onPress = {handlePress} style = {({pressed})=> pressed ? styles.pressed : null}>
                <View>
                    <Image style = {styles.image} source={{uri:imageUrl}}></Image>
                    <Text style = {styles.title}>{title}</Text>
                    <View style={styles.innerContainer}>
                        <Text style={styles.detailText}>{duration} Minutes</Text>
                        <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailText}>{afford.toUpperCase()}</Text>
                    </View>
                </View>

            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : 200,

    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 18,
        paddingTop : 16,
        color:'white',
    },
    outerContainer : {
        margin : 16,
        borderRadius : 10,
        overflow : 'hidden',
        backgroundColor : '#274227',
        
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
        color:'white',
    },
    pressed:{
        opacity : 0.5,

    }
})
