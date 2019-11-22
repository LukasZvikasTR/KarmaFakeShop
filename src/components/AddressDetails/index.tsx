import React, { FC } from "react";
import { Styled } from "./styles";
import Heading from "../Heading";
import Button from "../Button";

const AddressDetails: FC<{ headingTitle: string }> = props => {
  return (
    <Styled.AddressSectionContent>
      <Styled.AddressSectionContentDetails>
        <Heading headingTitle={props.headingTitle} />
        <Styled.AddressSectionContentItem>
          John Doe
        </Styled.AddressSectionContentItem>
        <Styled.AddressSectionContentItem>
          Flat 14, Portman House, 16-18 Oxford Road
        </Styled.AddressSectionContentItem>
        <Styled.AddressSectionContentItem>
          W9 4GF
        </Styled.AddressSectionContentItem>
        <Styled.AddressSectionContentItem>
          johndoe@gmail.com
        </Styled.AddressSectionContentItem>
        <Styled.AddressSectionContentItem>UK</Styled.AddressSectionContentItem>
        <Styled.AddressSectionContentItem>
          7736684543
        </Styled.AddressSectionContentItem>
      </Styled.AddressSectionContentDetails>
      <Button buttonTitle="CHANGE" />
    </Styled.AddressSectionContent>
  );
};

export default AddressDetails;
