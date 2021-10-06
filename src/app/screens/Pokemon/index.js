import React, { useEffect } from "react";

import {
  Container,
  Content,
  Details,
  DetailTitle,
  DetailContent,
  Divisor,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../../redux/pokemon/action";

import BackButton from "../../components/pokemon/backButton";
import Header from "../../components/pokemon/header";
import Stat from "../../components/pokemon/stat";
import Ability from "../../components/pokemon/ability";

import Loading from "../../components/util/loading";

const PokemonDetails = ({ route, navigation }) => {
  const { id } = route.params;

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const Abilities = () =>
    pokemon.data.abilities.map((ability, i) => (
      <Ability key={i} name={ability} />
    ));

  useEffect(() => {
    dispatch(getPokemon({ id }));
  }, []);

  return (
    <Container>
      <BackButton navigation={navigation} />

      {pokemon.loaded ? (
        <Content>
          <Header img={pokemon.data.img} id={id} name={pokemon.data.name} />

          <Details>
            <DetailTitle>Atributos</DetailTitle>

            <DetailContent>
              <Stat name="HP" value={pokemon.data.stats.hp} />
              <Stat name="Ataque" value={pokemon.data.stats.attack} />
              <Stat name="Defesa" value={pokemon.data.stats.defense} />
              <Stat name="Velocidade" value={pokemon.data.stats.speed} />
            </DetailContent>

            <Divisor />

            <DetailTitle>Habilidades</DetailTitle>

            <DetailContent>
              <Abilities />
            </DetailContent>
          </Details>
        </Content>
      ) : (
        <Loading loading={true} white />
      )}
    </Container>
  );
};

export default PokemonDetails;
