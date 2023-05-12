import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import StackNavigator from './StackNavigator'

function HomeScreen({ navigation }) {
    return (
        <StackNavigator />
    )
}

function OrderScreen({ navigation }) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>接单</Text>
        </View>
    )
}

function UserScreen({ navigation }) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>我的</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === '首页') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name === '接单') {
                        iconName = focused ? 'document-text' : 'document-text-outline'
                    }
                    else if (route.name === '我的') {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                },

            })}
        >
            <Tab.Screen
                name="首页"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
            />
            <Tab.Screen
                name="接单"
                component={OrderScreen}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
            />
            <Tab.Screen
                name="我的"
                component={UserScreen}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15
                    }
                }}
            />
        </Tab.Navigator>
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