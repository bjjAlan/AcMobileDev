import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {useNavigation,NavigationProp} from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('a');
    const [password,setPassword] = useState('a');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false)


    async function getLogin(){
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Atenção!','Informe os campos obrigatórios!')
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

            setTimeout(()=>{
                if(email == 'bjjalan.silva@gmail.com' && password == '123456'){
                    Alert.alert('Logado com sucesso!')
                }else{
                    Alert.alert('Usuário não cadastrado')
                }
                setLoading(false)
            },2000)

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.title}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    onChangeText={setEmail}
                    value={email}
                    title="E-mail"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input
                    onChangeText={setPassword}
                    value={password}
                    title="Senha"
                    IconRight={Octicons}
                    IconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconLeftPress={()=>setShowPassword(!showPassword)}
                />

            </View>
            <View style={style.boxBottom}>
                <Button
                    text="ENTRAR"
                    loading={loading}
                    onPress={()=>getLogin}
                />
            </View>
            <Text style={style.textButton}>Não tem conta? <Text style={{color:themas.Colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}