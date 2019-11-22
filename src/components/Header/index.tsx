import React, { FC } from "react";
import { Styled } from "./styles";

const Header: FC<{}> = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Cameleon
        style={{
          fontSize: 36,
          fontWeight: "bold",
          position: "absolute",
          left: 20
        }}
      >
        CHAMELEON
      </Styled.Cameleon>
      <Styled.HeaderItem>
        {window.location.pathname.includes("checkout")
          ? "CHECKOUT"
          : "PURCHASES"}
      </Styled.HeaderItem>
    </Styled.HeaderWrapper>
  );
};

export default Header;
