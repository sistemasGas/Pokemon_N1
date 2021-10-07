import React from "react";
import { TextInput } from "react-native";
import { Container, Title, Subtitle } from "./styles";

const PokemonsListHeader = () => (
  <Container>
    <Title>Pokemons</Title>
    <Subtitle>Escolha seu pokemon e veja os datalhes!!!</Subtitle>
    <TextInput/>
  </Container>

)

export default PokemonsListHeader
