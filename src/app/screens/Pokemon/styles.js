import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: #8bd674;
`;

export const Content = styled.View`
  flex: 1;
  padding-bottom: 30px;
`;

export const Details = styled.View`
  flex: 1;
  border-radius: 30px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 1px 8px rgba(0, 0, 20, 0.08);
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  line-height: 42px;

  color: #62b957;
`;

export const DetailContent = styled.View`
  flex: 1;
`;

export const Divisor = styled.View`
  width: 100%;
  height: 20px;
`;
