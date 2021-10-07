import React, { useEffect } from "react";
import { Text } from "react-native";
import { Container } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { getPokemons, resetPokemons } from "../../../redux/pokemons/action";

import PokemonsListHeader from "../../components/pokemons/header";
import UselessTextInput from "../../components/pokemons/search/search";
import PokemonItem from "../../components/pokemons/item";

import Loading from "../../components/util/loading";

const PokemonsList = ({ navigation }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const load = () => {
    try {
      dispatch(getPokemons({ offset: 0 }));
    } catch (error) {
      alert(error);
    }
  };

  const loadMore = () => {
    try {
      dispatch(getPokemons({ offset: pokemons.offset + 10 }));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    dispatch(resetPokemons());
  }, []);

  useEffect(() => {
    if (!pokemons.data.length && !pokemons.loading) return load();
  }, [pokemons]);

  return (
    <Container
      data={pokemons.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PokemonItem item={item} navigation={navigation} />
      )}
      ListHeaderComponent={<PokemonsListHeader />}
      ListSearchComponent={<UselessTextInput />}
      ListFooterComponent={<Loading loading={pokemons.loading} />}
      onEndReached={loadMore}
      onEndReachedThreshold={2}
    />
  );
};

export default PokemonsList;
