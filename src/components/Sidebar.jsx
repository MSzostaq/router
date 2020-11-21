import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext";
import Icon from "./Icon";

const StyledSidebar = styled.div`
  background-color: #0043a4;
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 100%;
`;

const CloseButton = styled(Icon)`
  color: #bdbdbd;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
`;

const Sidebar = () => {
  const { isMenuOpen, toggleMenu } = useContext(GlobalContext);
  return isMenuOpen ? (
    <StyledSidebar>
      <CloseButton icon="close" onClick={() => toggleMenu(false)} />
    </StyledSidebar>
  ) : null;
};

export default Sidebar;
