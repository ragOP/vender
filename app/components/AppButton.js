import React from 'react';
import { StyleSheet,View, Text, TouchableOpacity} from 'react-native'
import colors from "../config/colors";
function AppButton({title,onPress,color}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor : colors[color]}]} onPress={onPress}>
     <Text style ={styles.text}>{title}</Text>     
        </TouchableOpacity>
     
    );
}
const styles = StyleSheet.create({
    button :{
        backgroundColor :"#FFC0CB",
        borderRadius : 25,
        justifyContent:'center',
        alignItems : 'center',
        padding :15,
        width :'100%',
        marginVertical : 10
    
    },
    text :{
        color : colors.black,
        fontSize :18,
        textTransform :'uppercase',
        fontWeight :'bold'
    }
})

export default AppButton;
