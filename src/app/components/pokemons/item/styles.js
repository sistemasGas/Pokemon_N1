import React from "react";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;

  margin-bottom: 30px;
  padding: 20px;

  justify-content: flex-start;
  align-items: flex-start;

  height: auto;
  width: 100%;

  border-radius: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  background-color: #8bd674;
`;

export const Sprite = styled.Image`
  position: absolute;

  width: auto;
  height: 140px;
  min-width: 50%;

  right: -15px;
  bottom: -30px;
`;

export const Id = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: rgba(23, 23, 27, 0.6);
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;

  color: #fff;
`;
