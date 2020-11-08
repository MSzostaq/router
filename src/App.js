import React from "react";
// import styled from "styled-components";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
// import useInterval from "./hooks/useInterval";
// import Notifications from "./components/Notifications";
import Routes from "./components/Routes";

// const AppNotifications = styled(Notifications)`
//   position: fixed;
//   right: 16px;
//   bottom: 16px;
// `;

function App() {
  //  const [notifications, setNotifications] = useState([]);

  // function removeNotification(id) {
  //   setNotifications((prev) => prev.filter((n) => n.id !== id));
  // }
  //
  // function onNotificationClose(id) {
  //   removeNotification(id);
  // }

  // function addNotification(v) {
  //   const notification = {
  //     id: uuidv4(),
  //     type: v ? "ok" : "error",
  //     title: `Toggle switched ${v ? "on" : "off"}`,
  //     message: `This is ${v ? "good" : "bad"}.`,
  //     lifespan: 2000,
  //     onClose: onNotificationClose,
  //   };
  //   setNotifications([...notifications, notification]);
  // }

  // useInterval(() => addNotification(Math.random() < 0.5), 200);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
