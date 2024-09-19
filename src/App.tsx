import React from "react";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const App = () => {
  return (
    <>
      <Header text="Центр занятости населения" icon={<AccountCircleIcon />} />
      <Content />
    </>
  );
};
