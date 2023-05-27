import { Pressable , View,Text,StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';

function GridTile ({title,color,onPress}){

        const navigation = useNavigation();

    return (
        <View style={styles.outerView}>
            <Pressable onPress ={onPress} style={({pressed})=>[styles.pressable,pressed ? styles.buttonPressed : null]} >
                <View style={[{backgroundColor : color},styles.innerView,]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default GridTile;

const styles = StyleSheet.create ({
    outerView : {
        flex:1,
        margin: 16,
        height : 150,
    },
    innerView : {
        flex:1,
        padding : 16,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 16, 
        borderWidth : 2,
    },
    
    pressable : { 
        flex:1,
    },

    title :{
        fontWeight : 'bold',
        fontSize : 18,
    },
    buttonPressed : {
        opacity : 0.5,
    }


})