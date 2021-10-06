import styled from "styled-components/native";

export const Container = styled.View`
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;
`;

export const Icon = styled.Image`
  height: ${(props) => (props.white ? "80px" : "38px")};
  width: ${(props) => (props.white ? "80px" : "38px")};
`;
