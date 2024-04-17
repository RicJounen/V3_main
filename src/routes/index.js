import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Login from "../pages/login";
import TelaBemvindo from "../pages/telaBemVindo";
import TelaTurmas from "../pages/telaTurmas";
import TelaCurricular from "../pages/telaCurricular";

const Stack = createStackNavigator();

export default function Routes () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="BemVindo" component={TelaBemvindo}/>
            <Stack.Screen name="Turmas" component={TelaTurmas}/>
            <Stack.Screen name="Curriculo" component={TelaCurricular}/>
        </Stack.Navigator>
    )
}