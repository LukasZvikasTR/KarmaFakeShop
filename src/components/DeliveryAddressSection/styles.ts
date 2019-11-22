import styled from "styled-components";

const AddressSectionWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;

const AddressSectionContent = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

const AddressSectionContentItem = styled.div`
  background-color: inherit;
`;

const AddressSectionContentHeader = styled(AddressSectionContentItem)`
  margin: 0 0 30px 0;
  font-weight: bold;
`;

const AddressSectionContentAddress = styled(AddressSectionContentItem)`
  font-size: 10;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: whitesmoke;
  height: 40px;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  font-weight: 700;
`;

const AddressSectionContentDetails = styled.div`
  background-color: inherit;
`;

export const Styled = {
  AddressSectionWrapper,
  AddressSectionContent,
  AddressSectionContentItem,
  AddressSectionContentHeader,
  AddressSectionContentAddress,
  Button,
  AddressSectionContentDetails
};
