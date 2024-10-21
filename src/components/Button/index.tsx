import React from "react";
import { ActivityIndicatorComponent, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { style } from "./styles";

type Props = TouchableOpacityProps & {
    text:string,
    loading?:boolean
}

export function Button({...rest}:Props){
    return(
        <TouchableOpacity 
            style={style.buttom}
            {...rest}
            activeOpacity={0.6}
            >
            {rest.loading?<ActivityIndicatorComponent/>:<Text style={style.textButtom}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}