import styled from "styled-components";

export const SeparatorLine = styled.div<{
  color?: string;
  width: number | string;
}>`
  height: 0.5px;
  width: ${props => props.width};
  background-color: ${props => props.color || "#a9a9a9"};
`;
