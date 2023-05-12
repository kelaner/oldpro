import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        <>
            <Button
                title="跳到订单界面"
                onPress={() => navigation.navigate('Order')}
            />
            <View style={[styles.container]}>

                <Text style={[styles.text]}>首页</Text>
            </View>
        </>
    )
}

function OrderScreen({ navigation }) {
    return (
        <Button
            title="跳到首页"
            onPress={() => navigation.navigate('Home')}
        />
    )
}

const Stack = createNativeStackNavigator();



export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Order'
                component={OrderScreen}
                options={{
                    title: "我的订单",
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <Text
                            onPress={() => alert('消息')}>
                            消息
                        </Text>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40
    }
})
