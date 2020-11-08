import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "../components/MenuToggle";
import Toggle from "../components/Toggle";

const View = styled.div`
  height: 100%;
  position: relative;
`;

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Form = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

function ToggleView() {
  const [value, setValue] = useState(false);
  function onValueChange(newValue) {
    setValue(newValue);
  }
  return (
    <View>
      <StyledMenuToggle />
      <Form>
        <Toggle size="jumbo" value={value} onChange={onValueChange} />
      </Form>
    </View>
  );
}

export default ToggleView;
