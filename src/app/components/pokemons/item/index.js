import React, { memo } from "react";
import { Container, Sprite, Id, Name } from "./styles";

const PokemonItem = ({ item, navigation }) => {
  const handleDetails = (id) => {
    navigation.navigate("pokemon", { id });
  };

  return (
    <Container onPress={() => handleDetails(item.id)}>
      <Sprite source={{ uri: item.img }} />

      <Id># {item.id}</Id>
      <Name>{item.name}</Name>
    </Container>
  );
};

export default memo(PokemonItem);
