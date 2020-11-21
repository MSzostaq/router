import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../contexts/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({ isMenuOpen: false, notifications: [] });

  function toggleMenu(value) {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: value !== undefined ? value : !prevState.isMenuOpen,
    }));
  }

  function removeNotification(id) {
    setState((prevState) => ({
      ...prevState,
      notifications: prevState.notifications.filter((n) => n.id !== id),
    }));
  }

  function addNotification(notification) {
    const newNotification = {
      id: uuidv4(),
      type: "ok",
      title: "",
      message: "",
      lifespan: 5000,
      onClose: (id) => removeNotification(id),
      ...notification,
    };

    setState((prevState) => ({
      ...prevState,
      notifications: [...prevState.notifications, newNotification],
    }));
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      addNotification,
      removeNotification,
    }));
  }, [state.notifications]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      toggleMenu,
    }));
  }, [state.isMenuOpen]);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
