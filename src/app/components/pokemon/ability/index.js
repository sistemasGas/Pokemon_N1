import React from "react";
import { Container, Name } from "./styles";

const PokemonAbility = ({ name }) => (
  <Container>
    <Name>{name}</Name>
  </Container>
);

export default PokemonAbility;
