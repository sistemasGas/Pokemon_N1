import React from "react";
import { Container, Sprite, Infos, Id, Name } from "./styles";

const PokemonHeader = ({ img, id, name }) => (
  <Container>
    <Sprite source={{ uri: img }} />
    <Infos>
      <Id># {id}</Id>
      <Name>{name}</Name>
    </Infos>
  </Container>
);

export default PokemonHeader;
