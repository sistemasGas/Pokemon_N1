import React from "react";
import { Container, Icon } from "./styles";

import backIcon from "../../../../../assets/back.png";

const BackButton = ({ navigation }) => (
  <Container onPress={() => navigation.goBack()}>
    <Icon source={backIcon} />
  </Container>
);

export default BackButton;
