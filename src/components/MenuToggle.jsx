import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const ToggleButton = styled.button`
  color: #bdbdbd;
  width: 64px;
  height: 64px;
`;

const ToggleButtonIcon = styled(Icon)`
  width: 48px;
  height: 48px;
`;

function MenuToggle({ className }) {
  return (
    <ToggleButton className={className}>
      <ToggleButtonIcon icon="menu" />
    </ToggleButton>
  );
}

export default MenuToggle;
