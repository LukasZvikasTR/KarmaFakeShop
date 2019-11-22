import React, { FC } from "react";
import { Styled } from "./styles";
import AddressDetails from "../AddressDetails";
import Button from "../Button";

const AddressSection: FC<{}> = () => {
  return (
    <Styled.AddressSectionWrapper>
      <AddressDetails headingTitle="DELIVERY ADDRESS" />
    </Styled.AddressSectionWrapper>
  );
};

export default AddressSection;
