import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu";
import ToggleView from "./ToggleView";

const ViewWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const View = styled.div`
  height: 100%;
`;

function Dashboard() {
  return (
    <ViewWrapper>
      <View>
        <Switch>
          <Route path="/toggle">
            <ToggleView />
          </Route>
          <Route path="/other"></Route>
          <Redirect to="/toggle" />
        </Switch>
      </View>
      <Menu />
    </ViewWrapper>
  );
}

export default Dashboard;
