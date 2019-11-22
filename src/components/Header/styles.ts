import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 0;
  background-color: whitesmoke;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

const Cameleon = styled.div`
  background: -webkit-linear-gradient(#90ee90, #00008b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Styled = { HeaderWrapper, HeaderItem, Cameleon };
