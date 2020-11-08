import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #f00;
`;

function Menu({ className }) {
  return <MenuWrapper></MenuWrapper>;
}

export default Menu;
