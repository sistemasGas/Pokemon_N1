import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import PokemonsList from "../app/screens/Pokemons";
import PokemonDetails from "../app/screens/Pokemon";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"pokemons"}
          component={PokemonsList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"pokemon"}
          component={PokemonDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
