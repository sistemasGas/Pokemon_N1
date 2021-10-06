import React from "react";
import { Container, Icon } from "./styles";

import loadingIcon from "../../../../../assets/loading.gif";
import loadingWhiteIcon from "../../../../../assets/loadingWhite.gif";

const Loading = ({ loading, white }) => (
  <Container show={loading}>
    <Icon
      source={white ? loadingWhiteIcon : loadingIcon}
      white={white ? true : false}
    />
  </Container>
);

export default Loading;
