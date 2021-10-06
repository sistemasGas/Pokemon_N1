import React from "react";
import { Container, Name, Value } from "./styles";

const PokemonStat = ({ name, value }) => (
  <Container>
    <Name>{name}</Name>
    <Value>{value}</Value>
  </Container>
);

export default PokemonStat;
