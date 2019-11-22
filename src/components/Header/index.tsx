import React, { FC } from "react";
import { Styled } from "./styles";

const Header: FC<{}> = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Cameleon style={{ fontSize: 36, fontWeight: "bold" }}>
        CHAMELEON
      </Styled.Cameleon>
      <Styled.HeaderItem>
        {window.location.pathname.includes("checkout")
          ? "CHECKOUT"
          : "PURCHASES"}
      </Styled.HeaderItem>
      <div style={{ width: 350 }} />
    </Styled.HeaderWrapper>
  );
};

export default Header;
