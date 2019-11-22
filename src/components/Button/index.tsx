import React, { FC } from "react";
import { Styled } from "./styles";

const Button: FC<{ buttonTitle: string }> = props => (
  <Styled.Button>{props.buttonTitle}</Styled.Button>
);

export default Button;
