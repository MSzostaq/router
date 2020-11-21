import React, { useContext } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalContext from "../contexts/GlobalContext";
import Notification from "./Notification";

const StyledNotifications = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 0;
`;

const StyledNotification = styled(Notification)`
  margin-top: 4px;

  &:first-child {
    margin-top: 0;
  }
`;

const Notifications = ({ className }) => {
  const { notifications } = useContext(GlobalContext);
  return (
    <StyledNotifications className={className}>
      <AnimatePresence initial={false}>
        {notifications.map((notification) => (
          <StyledNotification
            key={notification.id}
            positionTransition
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
            notification={notification}
          />
        ))}
      </AnimatePresence>
    </StyledNotifications>
  );
};

export default Notifications;
