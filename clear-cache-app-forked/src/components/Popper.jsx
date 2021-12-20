import React from "react";
import styled from "styled-components";
import { MdClose, MdInfo } from "react-icons/md";

const Box = styled.div`
  width: 20rem;
  /* height: 5rem; */
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 1.6rem;
  border-radius: 3px;
  color: rgb(66, 82, 110);
  background-color: rgb(255, 255, 255);
  transition: background-color 200ms ease 0s;
  box-shadow: rgb(9 30 66 / 31%) 0px 0px 1px,
    rgb(9 30 66 / 25%) 0px 20px 32px -8px;
  z-index: 600;
`;
const Button = styled.button`
  color: rgb(0, 82, 204);
  font-weight: 500;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: rgb(3, 58, 140);
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 16px; */
`;
const Dot = styled.div`
  padding-bottom: 10px;
`;
const ButtonBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 35px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.span`
  padding: 0px 0px 0px 16px;
  color: rgb(66, 82, 110);
  font-weight: 600;
`;
const InfoIcon = styled(MdInfo)`
  color: rgb(0, 82, 204);
  height: 24px;
  width: 24px;
`;
const CloseIcon = styled(MdClose)`
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #d3d3d323;
    border-radius: 50%;
    padding: 10px;
  }
  &:active {
    background-color: #d3d3d3c9;
    border-radius: 50%;
    padding: 10px;
  }
`;

const Popper = ({ show, hide, reload }) => {
  const handleReload = () => {
    reload();
    hide();
  };
  return (
    <Box show={show}>
      <Header>
        <InfoBox>
          <InfoIcon />
          <Text>New version available</Text>
        </InfoBox>
        <CloseIcon onClick={hide} />
      </Header>

      <ButtonBox>
        <Button onClick={handleReload}>Reload</Button>
        <Dot>.</Dot>
        <Button onClick={hide}>Not Now</Button>
      </ButtonBox>
    </Box>
  );
};
export default Popper;
